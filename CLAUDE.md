@AGENTS.md

# 部署配置（本项目唯一部署目标）

| 项 | 值 |
|---|---|
| GCP 账号 | `it.pioneergroup@gmail.com`（**不是** erichecan@gmail.com）|
| GCP Project ID | `project-5136cf27-8999-458a-b3c` |
| Region | `us-central1` |
| Cloud Run 服务名 | `cathleen-qin-site` |
| Artifact Registry 仓库 | `us-central1-docker.pkg.dev/project-5136cf27-8999-458a-b3c/cathleen-qin-site` |
| 镜像 tag | `.../cathleen-qin-site/site:latest` |
| 部署方式 | GitHub Actions（`.github/workflows/deploy.yml`），push 到 `main` 自动触发 |
| GitHub 仓库 | https://github.com/erichecan/cathleen-qin-site |
| 认证方式 | Workload Identity Federation（**无 secret、无长期密钥**） |
| WIF Provider | `projects/970878162504/locations/global/workloadIdentityPools/github-pool/providers/github-provider` |
| 部署用 SA | `github-deployer@project-5136cf27-8999-458a-b3c.iam.gserviceaccount.com` |

⛔ 铁律：

- 本项目**只**部署到 `project-5136cf27-8999-458a-b3c`。旧项目 `supply-491510` 已弃用，任何命令中出现它都是错的。
- 部署**只能**通过 `git push origin main` 触发 GitHub Actions，**禁止** `gcloud builds submit` 和本地 `gcloud run deploy`。
- 本机 gcloud 默认 active account 是 `erichecan@gmail.com`（其他项目在用），它对本项目**无权限**。
  为不污染其他项目，本项目的每条 gcloud 命令都**显式带参数**，不要改全局配置：

  ```bash
  gcloud <cmd> --account it.pioneergroup@gmail.com --project project-5136cf27-8999-458a-b3c
  ```

  未登录过该账号时先执行 `gcloud auth login it.pioneergroup@gmail.com`
  （它会把 active account 切成 pioneer，用完可 `gcloud config set account erichecan@gmail.com` 切回）。
- GitHub 仓库仍在 `erichecan` 名下（`gh` 用这个账号），只有 GCP 侧换成 pioneer 账号，两者不要混。

# 站点结构

这是一个**静态站点**，Cloud Run 上用 nginx 提供服务：

- 页面内容：`site/index.html` + `site/content.js`（文案与图片路径集中在 content.js）
- 图片：`site/images/`
- nginx 配置：`deploy/nginx.conf`（监听 8080）
- `Dockerfile`：`nginx:1.27-alpine` + 拷贝 `site/`

根目录的 `src/`、`next.config.ts` 等 Next.js 文件**不参与线上构建**，改动它们不会影响生产站点。

# 认证说明（为什么不是 GCP_SA_KEY）

该项目归属组织 `307065806265`，组织策略 `constraints/iam.disableServiceAccountKeyCreation`
**强制禁止创建 service account JSON key**，所以老的 `GCP_SA_KEY` 方案在这里行不通
（尝试创建会静默产生空文件，别再走这条路）。

改用 Workload Identity Federation：GitHub Actions 用 OIDC token 直接换取 GCP 凭证。

- Pool：`github-pool`，Provider：`github-provider`（issuer `https://token.actions.githubusercontent.com`）
- attribute-condition 限定 `assertion.repository=='erichecan/cathleen-qin-site'`，其他仓库无法冒用
- `github-deployer` SA 被授予 `roles/iam.workloadIdentityUser` 给该仓库的 principalSet
- workflow 必须保留 `permissions: id-token: write`，删掉它认证会直接失败
- SA 项目级角色：`roles/run.admin`、`roles/artifactregistry.writer`、`roles/iam.serviceAccountUser`
