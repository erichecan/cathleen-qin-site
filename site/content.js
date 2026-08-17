/* =============================================================================
   网站全部文案与图片配置 —— 改站只改这一个文件

   · 改文字：直接改下面引号里的内容
   · 改图片：把新图片放进 images/ 文件夹，然后改这里的文件名
   · 改链接：改 href 的值（"#about" 是页内锚点，"https://..." 是外部链接）
   · 想删掉某一条列表项：把整行（含末尾逗号）删掉即可
   · 中文引号「」和特殊符号都可以直接写，不需要转义
   ========================================================================== */

window.CONTENT = {

  /* ---------- 浏览器标签页 ---------- */
  meta: {
    title: 'Cathleen Qin — Healing · Awakening · Authentic Living',
    description: 'Helping people heal, awaken, and create a life that is authentic, meaningful, and whole.',
  },

  /* ---------- 顶部导航 ---------- */
  nav: {
    brand: 'Cathleen Qin',
    links: [
      { label: 'HOME',     href: '#home'     },
      { label: 'ABOUT',    href: '#about'    },
      { label: 'SPEAKING', href: '#speaking' },
      { label: 'WRITING',  href: '#writing'  },
      { label: 'CONTACT',  href: '#contact'  },
    ],
    cta: { label: 'START YOUR JOURNEY', href: '#contact' },
  },

  /* ---------- 首屏 ---------- */
  hero: {
    title: 'Cathleen Qin',
    tagline: 'Heal. Awaken. Live Authentically.',
    lead: 'Helping people heal, awaken, and create a life that is authentic, meaningful, and whole.',
    note: 'A better life begins with a deeper relationship with yourself.',
    primaryCta:   { label: 'START YOUR JOURNEY', href: '#contact' },
    secondaryCta: { label: 'MY STORY',           href: '#about'   },
    image: { src: 'images/hero-portrait.jpg', alt: 'Cathleen Qin 肖像' },
  },

  /* ---------- Welcome 横幅 ---------- */
  quote: {
    eyebrow: 'WELCOME',
    text: 'I spent years helping people change their lives. Then I realized transformation had to go deeper.',
    body: 'For nearly two decades, I helped newcomers, professionals, and entrepreneurs build better lives through education, career development, and opportunity. Over time, I realized that a better career did not always create a better life.',
    image: { src: 'images/quote-vase.jpg', alt: 'Cathleen Qin 演讲舞台照' },
  },

  /* ---------- 转折点 ---------- */
  turningPoint: {
    eyebrow: 'WHAT I LEARNED',
    title: 'The Turning Point',
    body: 'On the outside, everything looked like progress. But something inside was still asking deeper questions.',
    /* icon 可选值：leaf / lotus / person（图形定义在 index.html 的 <svg id="icon-sprite"> 里）*/
    items: [
      { icon: 'leaf',   text: 'A better career did not always create a better life.' },
      { icon: 'lotus',  text: 'Success did not automatically create peace.'          },
      { icon: 'person', text: 'Achievement did not always create fulfillment.'       },
    ],
    footnote: 'Changing external circumstances does not always change the patterns we carry within.',
  },

  /* ---------- 内在旅程 ---------- */
  innerJourney: {
    eyebrow: 'MY INNER JOURNEY',
    title: 'My Greatest Transformation Was Not Professional',
    intro: 'I had to slow down, listen, and turn inward.',
    pullquote: 'Who am I when I stop trying to become who I think I should be?',
    body: 'Through healing, self-awareness, and the connection between body, mind, and soul, I began to understand transformation differently. Sometimes we do not need another achievement. Sometimes we need to come home to ourselves.',
    image: { src: 'images/about-portrait.jpg', alt: 'Cathleen Qin 肖像' },
  },

  /* ---------- 理念 ---------- */
  philosophy: {
    eyebrow: 'MY PHILOSOPHY',
    title: 'From Career Transformation to Human Transformation',
    lines: [
      'Education was never only about education.',
      'Career planning was never only about jobs.',
      'Entrepreneurship was never only about business.',
      'Healing is not only about feeling better.',
    ],
    pullquote: 'Every person carries gifts that deserve to be discovered, developed, and expressed.',
    body: 'My work is to help people discover those gifts, remove what blocks them, and create the conditions where they can thrive.',
  },

  /* ---------- 转变的三个阶段 ---------- */
  stages: {
    eyebrow: 'THE THREE STAGES OF TRANSFORMATION',
    /* icon 可选值：sprout / sunrise / tree */
    items: [
      { icon: 'sprout',  title: 'Healing',          text: 'Healing what no longer needs to control us.' },
      { icon: 'sunrise', title: 'Awakening',        text: 'Awakening to who we really are.'             },
      { icon: 'tree',    title: 'Authentic Living', text: 'Building a life that reflects that truth.'   },
    ],
  },

  /* ---------- 写作 ---------- */
  writing: {
    title: 'Writing',
    body: 'Reflections on healing, awakening, and authentic living.',
    topics: ['Receiving', 'Inner Critic', 'Boundaries', 'Life Flow'],
    link: { label: 'Read My Latest Reflections', href: '#journal' },
    image: { src: 'images/writing-desk.jpg', alt: '书桌上的笔记本与咖啡' },
  },

  /* ---------- 演讲 ---------- */
  speaking: {
    title: 'Speaking',
    body: 'Conversations that create transformation in work, leadership, and life.',
    topics: [
      'Healing & Self-Awareness',
      'Women & Authentic Living',
      'Career, Purpose & Transformation',
      'Leadership from Within',
      'From Achievement to Wholeness',
      'Body · Mind · Soul Transformation',
    ],
    cta: { label: 'INVITE CATHLEEN TO SPEAK', href: '#contact' },
    image: { src: 'images/speaking-mic.jpg', alt: '手持话筒演讲照' },
  },

  /* ---------- 我的工作 ---------- */
  myWork: {
    eyebrow: 'MY WORK',
    title: 'One mission. Different expressions.',
    subtitle: 'Writing, speaking, education, healing, and platform building — all in service of helping people grow in purpose, wellbeing, and authentic living.',
    items: [
      { icon: 'leaf',   title: 'WRITING',            text: 'Ideas and reflections for inner and outer transformation.'                  },
      { icon: 'mic',    title: 'SPEAKING',            text: 'Conversations that inspire clarity, courage, and growth.'                  },
      { icon: 'lotus',  title: 'EDUCATION & HEALING', text: 'Support for meaningful growth through learning and inner work.'            },
      { icon: 'person', title: 'PLATFORMS',           text: 'An evolving ecosystem including Pioneer Group and related platforms.'      },
    ],
  },

  /* ---------- 个人留言 ---------- */
  personalNote: {
    eyebrow: 'A PERSONAL NOTE',
    title: 'I am still on the journey too.',
    body: 'I do not speak from a place of having mastered life. I speak as a woman, immigrant, entrepreneur, mother, founder, and lifelong learner — still healing, still questioning, still beginning again.',
    questions: [
      { icon: 'person', text: 'Who am I becoming?'                     },
      { icon: 'lotus',  text: 'What am I ready to release?'            },
      { icon: 'leaf',   text: 'What kind of life feels true to me now?' },
    ],
    image: { src: 'images/about-portrait.jpg', alt: 'Cathleen Qin' },
  },

  /* ---------- 页脚 ---------- */
  footer: {
    quote: "Your next chapter doesn't have to look like your last one.",
    sub: 'Heal what is ready to be healed. Awaken to who you truly are. Create from that place. Live authentically.',
    cta: { label: 'START YOUR JOURNEY', href: '#contact' },
    /* icon 可选值：linkedin / youtube / instagram / mail */
    social: [
      { icon: 'linkedin',  label: 'LinkedIn',   href: '#' },
      { icon: 'youtube',   label: 'YouTube',    href: '#' },
      { icon: 'instagram', label: 'Instagram',  href: '#' },
      { icon: 'mail',      label: 'Newsletter', href: '#' },
    ],
    tagline: 'Cathleen Qin | Author · Speaker · Entrepreneur · Transformation Guide',
    copyright: 'Healing · Awakening · Authentic Living',
  },
};
