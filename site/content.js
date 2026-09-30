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
    brand: 'Cathleen Q',
    links: [
      { label: 'HOME',     href: '#home'     },
      { label: 'MY STORY', href: '#about'    },
      { label: 'SPEAKING', href: '#speaking' },
      { label: 'WRITING',  href: '#writing'  },
      { label: 'CONTACT',  href: '#contact'  },
    ],
    cta: { label: 'START YOUR JOURNEY', href: '#contact' },
  },

  /* ---------- 首屏 ---------- */
  hero: {
    title: 'Cathleen Q',
    tagline: 'Heal. Awaken. Live Authentically.',
    lead: 'Founder · Writer · Transformation Guide',
    note: 'Helping people reconnect with themselves through Healing · Awakening · Authentic Living.',
    primaryCta:   { label: 'START YOUR JOURNEY', href: '#contact' },
    secondaryCta: { label: 'MY STORY',           href: '#about'   },
    image: { src: 'images/hero-portrait.jpg', alt: 'Cathleen Qin 肖像' },
  },

  /* ---------- Welcome 横幅 ---------- */
  quote: {
    eyebrow: 'MEET CATHLEEN Q',
    text: 'From building better careers to helping people come back to themselves.',
    body: 'For nearly two decades, Cathleen built Pioneer Group and supported immigrants and professionals through education, career development, employment, and entrepreneurship. Her work later expanded through Soul Good Happy Women Club and Soul Beauty Healing Center. Today, those chapters come together in Back to Yourself — an invitation to heal, awaken, and live more authentically.',
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
    image: { src: 'images/journey-portrait.jpg', alt: 'Cathleen Qin 肖像' },
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

  /* ---------- 我的历程 ---------- */
  path: {
    eyebrow: 'THE JOURNEY',
    title: 'The Path That Brought Me Here',
    subtitle: "Career · Women's Growth · Healing · Transformation",
    items: [
      { number: '01', title: 'PIONEER GROUP',             text: 'Career & entrepreneurship — nearly two decades supporting immigrants and professionals.' },
      { number: '02', title: 'SOUL GOOD HAPPY WOMEN CLUB', text: "Women's growth & community — creating space for connection, confidence, and possibility." },
      { number: '03', title: 'SOUL BEAUTY HEALING CENTER', text: 'Healing & holistic wellbeing — supporting the connection between body, mind, and emotions.' },
      { number: '04', title: 'BACK TO YOURSELF',           text: "Transformation — bringing career, leadership, women's growth, healing, and self-awareness together." },
    ],
  },

  /* ---------- 个人留言 ---------- */
  personalNote: {
    eyebrow: 'A PERSONAL NOTE',
    title: 'I am still on the journey too.',
    body: 'I do not speak from a place of having mastered life. I speak as a woman, immigrant, entrepreneur, mother, founder, and lifelong learner — still healing, still questioning, still beginning again. This ongoing journey is at the heart of Back to Yourself.',
    questions: [
      { icon: 'person', text: 'Who am I becoming?'                     },
      { icon: 'lotus',  text: 'What am I ready to release?'            },
      { icon: 'leaf',   text: 'What kind of life feels true to me now?' },
    ],
    image: { src: 'images/about-portrait.jpg', alt: 'Cathleen Qin' },
  },

  /* ---------- 页脚 ---------- */
  footer: {
    quote: 'Come back to yourself.',
    sub: 'Transformation is not about becoming someone new. It begins by reconnecting with who you truly are.',
    cta: { label: 'START YOUR JOURNEY', href: 'https://soulgoodwclub.org/', target: '_blank' },
    /* icon 可选值：instagram / facebook / linkedin / youtube / mail */
    social: [
      { icon: 'instagram', label: 'Instagram',  href: 'https://www.instagram.com/cathleenqin/',        target: '_blank' },
      { icon: 'facebook',  label: 'Facebook',   href: 'https://www.facebook.com/cathleen.qin',          target: '_blank' },
      { icon: 'linkedin',  label: 'LinkedIn',   href: 'https://www.linkedin.com/in/cathleen-q-b0787942/', target: '_blank' },
      { icon: 'youtube',   label: 'YouTube',    href: 'https://www.youtube.com/@CathleenQ',             target: '_blank' },
      { icon: 'mail',      label: 'Newsletter', href: '#' },
    ],
    tagline: 'Cathleen Q | Founder · Writer · Transformation Guide',
    copyright: 'Healing · Awakening · Authentic Living',
  },
};
