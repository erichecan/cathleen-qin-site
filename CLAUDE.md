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
  - 镜像在 GitHub runner 上 `docker build` + `docker push`，workflow 里的 `gcloud run deploy --image`
    用的是已推好的镜像，不触发构建。仓库是 public，Actions 分钟数不计费。
  - 该项目 **`cloudbuild.googleapis.com` 未启用**（2026-08-18 核实），Cloud Build 想用也用不了 —— 别去启用它。
  - workflow 有 `paths` 过滤：只有 `site/**`、`deploy/**`、`Dockerfile`、`.dockerignore`、
    workflow 自身改动才会部署。**只改 CLAUDE.md / docs 不会触发部署**，需要手动发布时用
    `gh workflow run deploy.yml -R erichecan/cathleen-qin-site`。
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

# 成本约束：这个项目必须保持 $0（⛔ 硬要求）

已核实（2026-08-18）：项目内**没有任何**产生费用的资源，且最贵的几个计费面 API 压根没启用。

| 计费面 | 状态 | 免费额度 | 实际用量 |
|---|---|---|---|
| Compute Engine | **API 未启用** | — | 无 |
| Cloud SQL | **API 未启用** | — | 无 |
| GKE | **API 未启用** | — | 无 |
| Firestore | **API 未启用** | — | 无 |
| Cloud Storage | 无 bucket | 5GB | 0 |
| BigQuery | 无数据集 | 10GB 存储 | 0 |
| Pub/Sub | 无 topic | 10GB | 0 |
| Artifact Registry | 1 个仓库 | 0.5GB | 22MB |
| Cloud Run | 1 服务 / min-instances=0 | 200 万请求、180k vCPU-秒、360k GiB-秒/月 | 远低于 |
| **出站流量** | ← 唯一有上限的项 | 1GiB/月（北美） | 单次首访 481KB ≈ **2179 次首访/月**封顶 |

⛔ 不许做的事：

- 不要启用 compute / sqladmin / container / firestore 任何一个 API。它们一旦启用并创建资源就开始按小时计费。
- 不要把 `--min-instances` 改成大于 0 —— 那是常驻实例，会 24h 计费，这是最容易踩的坑。
- 不要提高 `--memory` / `--cpu`，当前 256Mi + cpu 1 是够用的最小档。
- 不要给站点加大体积图片/视频；出站流量是唯一会超的项。新增图片前先压缩（现有 9 张共 1.0MB）。

✅ 已布置的护栏：

- Artifact Registry cleanup policy：保留最近 2 个版本 + 3 天后删除未标记镜像，防止反复部署把 0.5GB 免费额度撑爆。
- Billing budget `cathleen-qin-site zero-cost guard`：CAD $1，50% / 100% 两档告警，
  filter 只针对本项目（`projects/970878162504`），不受结算账号下其他项目干扰。
  账单邮件发到结算账号的管理员邮箱。

自查命令：

```bash
gcloud run services describe cathleen-qin-site --region us-central1 \
  --account it.pioneergroup@gmail.com --project project-5136cf27-8999-458a-b3c \
  --format="value(spec.template.metadata.annotations['autoscaling.knative.dev/minScale'])"
# 期望输出为空或 0；出现 >0 立刻改回去
```
