# Cathleen Qin 静态站点 — 维护说明

```
site/
├── index.html    结构 + 样式 + 渲染逻辑（改文案不用碰这个文件）
├── content.js    ★ 所有文字、图片路径、链接都在这里
└── images/       所有图片
```

双击 `index.html` 就能在浏览器里看，不需要装任何东西。

---

## 改文字

打开 `content.js`，改引号里的内容，存盘，刷新浏览器。

```js
hero: {
  title: 'Cathleen Qin',        ← 改这里
  tagline: 'Healing · Awakening · Authentic Living',
}
```

注意：

- 只改**引号里面**的内容，不要动引号外的 `title:` 和末尾的逗号
- 文字里如果有英文单引号（如 `Women's`），把外层引号换成双引号：`"Women's Club"`
- 中文可以直接写，不需要额外处理

## 换图片

1. 把新图片放进 `images/` 文件夹
2. 在 `content.js` 里把文件名改成新的

```js
image: { src: 'images/hero-portrait.jpg', alt: 'Cathleen Qin 肖像' },
                      ↑ 改成新文件名        ↑ 图片说明（给读屏软件和搜索引擎看）
```

推荐尺寸（当前图片是从设计稿裁切放大的，清晰度有限，**建议换成原始高清图**）：

| 位置 | 文件 | 建议尺寸 | 说明 |
|---|---|---|---|
| 首屏人像 | `hero-portrait.jpg` | 1000 × 1200 | 竖版，人物偏画面中间；左边缘会做渐隐过渡 |
| 引言配图 | `quote-vase.jpg` | 1200 × 900 | 横版静物；左边缘会做渐隐过渡 |
| 内在旅程 | `about-portrait.jpg` | 1000 × 900 | 约 10:9 |
| 写作配图 | `writing-desk.jpg` | 600 × 800 | 竖版 |
| 演讲配图 | `speaking-mic.jpg` | 800 × 800 | 方形或竖版 |
| 品牌 logo | `logo-*.png` | 高 ≥ 200，**透明底 PNG** | 目前是从设计稿抠图的，建议换成官方原始 logo |

> `logo-soul-beauty.png` 上的英文在设计稿里就拼错成 "HEALINS CENTER"（原图如此，抠图无法修正），换成官方 logo 即可解决。

## 改链接

```js
cta: { label: 'START YOUR JOURNEY', href: '#contact' },
                    ↑ 按钮文字            ↑ 跳转目标
```

- `'#contact'` = 跳到本页面的某一区块（可用：`#home` `#about` `#writing` `#speaking` `#contact`）
- `'https://...'` = 跳到外部网站
- `'mailto:hello@example.com'` = 打开邮件

## 增删列表项

导航项、转折点三条、三个阶段、写作/演讲的主题、四个平台、页脚社交——都是列表，
**整段复制一行就是新增，整行删掉就是移除**，页面会自动重排（比如平台从 4 个删到 3 个，会自动变成 3 栏）。

```js
topics: ['Receiving', 'Inner Critic', 'Boundaries'],   ← 加一项就多一条
```

## 改图标

`content.js` 里图标写的是名字，不是图片：

- 转折点三条：`leaf`（叶）/ `lotus`（莲）/ `person`（人）
- 三个阶段：`sprout`（嫩芽）/ `sunrise`（日出）/ `tree`（树）
- 页脚：`linkedin` / `youtube` / `instagram` / `mail`

这些图形是画在 `index.html` 顶部 `<symbol id="icon-xxx">` 里的矢量图，任何尺寸都清晰。
要换成别的图形，改对应 `<symbol>` 里的 `<path>` 即可。

## 改配色和字体

在 `index.html` 开头的 `:root { ... }` 里，改一处全站生效：

```css
--green-900:#0F2417;   /* 深绿：大标题 */
--green-800:#1C3326;   /* 深绿：按钮、图标底 */
--gold:#A98B5C;        /* 金色：副标题、引用、分隔线 */
--bg:#F9F7F4;          /* 页面底色 */
--serif: 'Cormorant Garamond', ...   /* 衬线字体：标题、引用 */
--sans:  'Poppins', ...              /* 无衬线字体：正文 */
```

字体从 Google Fonts 加载。**如果部署到国内服务器**，Google Fonts 可能加载慢或失败，
届时页面会自动降级到系统字体（能看，但没那么精致）。要彻底解决就把字体文件下载到
`images/` 同级的 `fonts/` 目录，把 `index.html` 里的 Google Fonts `<link>` 换成本地 `@font-face`。

---

## 上线

整个 `site/` 文件夹原样上传到任何静态托管即可（Cloud Run 静态服务、Netlify、Vercel、
对象存储 + CDN 都行），没有构建步骤，没有服务端依赖。

本地预览如果双击打开有问题，也可以起个本地服务器：

```bash
cd site
python3 -m http.server 8899
# 然后浏览器打开 http://localhost:8899
```
