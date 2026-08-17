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
    tagline: 'Healing · Awakening · Authentic Living',
    lead: 'Helping people heal, awaken, and create a life that is authentic, meaningful, and whole.',
    note: 'My first chapter was about helping people find a better career. My next chapter is about helping people find themselves.',
    primaryCta:   { label: 'START YOUR JOURNEY', href: '#contact' },
    secondaryCta: { label: 'MY STORY',           href: '#about'   },
    image: { src: 'images/hero-portrait.jpg', alt: 'Cathleen Qin 肖像' },
  },

  /* ---------- 大引言横幅 ---------- */
  quote: {
    text: 'I spent years helping people change their lives. Then I realized transformation had to go deeper.',
    body: 'For nearly two decades, I have worked with immigrants, newcomers, and professionals—through education, career transitions, employment support, and entrepreneurship—helping them build new lives and create greater possibilities for themselves and their families.',
    image: { src: 'images/quote-vase.jpg', alt: '静物：花瓶与书' },
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
    body: 'Through healing, self-awareness, and the connection between body, mind, and soul, I began to come home to myself. That is where real transformation began.',
    image: { src: 'images/about-portrait.jpg', alt: 'Cathleen Qin 坐姿肖像' },
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
    body: 'My work is to help people discover those gifts, remove what blocks them, and create the conditions where they can thrive in alignment with who they truly are.',
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
    body: 'Reflections and insights on the journey of healing, awakening, and authentic living.',
    topics: ['Receiving', 'Inner Critic', 'Boundaries'],
    link: { label: 'Read More on My Journal', href: '#journal' },
    image: { src: 'images/writing-desk.jpg', alt: '书桌上的笔记本与咖啡' },
  },

  /* ---------- 演讲 ---------- */
  speaking: {
    title: 'Speaking',
    body: 'Keynotes and talks that inspire transformation in work, leadership, and life.',
    topics: [
      'Healing & Authentic Living',
      'Women, Leadership & Reinvention',
      'Career, Entrepreneurship & Life Transformation',
    ],
    cta: { label: 'INVITE CATHLEEN TO SPEAK', href: '#contact' },
    image: { src: 'images/speaking-mic.jpg', alt: '演讲台上的麦克风' },
  },

  /* ---------- 旗下平台 ---------- */
  platforms: {
    eyebrow: 'PLATFORMS BUILT WITH PURPOSE',
    title: 'Building platforms that empower people to grow in career, wellness, and authentic living.',
    items: [
      {
        logo: { src: 'images/logo-pioneer-group.png', alt: 'Pioneer Group' },
        text: 'A modern group creating impact through business, community, and sustainable growth.',
        link: { label: 'Learn More', href: '#' },
      },
      {
        logo: { src: 'images/logo-pioneer-consulting.png', alt: 'Pioneer Consulting' },
        text: 'Empowering people and organizations through career and business consulting.',
        link: { label: 'Learn More', href: '#' },
      },
      {
        logo: { src: 'images/logo-soul-beauty.png', alt: 'Soul Beauty Healing Center' },
        text: 'Holistic healing for body, mind, and soul through integrative approaches.',
        link: { label: 'Learn More', href: '#' },
      },
      {
        logo: { src: 'images/logo-soul-good.png', alt: "Soul Good Happy Women's Club" },
        text: 'A supportive community for women to connect, grow, and live with purpose.',
        link: { label: 'Learn More', href: '#' },
      },
    ],
  },

  /* ---------- 页脚 ---------- */
  footer: {
    quote: 'True transformation begins when we stop trying to become someone else and start becoming who we truly are.',
    cta: { label: 'START YOUR HEALING JOURNEY', href: '#contact' },
    /* icon 可选值：linkedin / youtube / instagram / mail */
    social: [
      { icon: 'linkedin',  label: 'LinkedIn',   href: '#' },
      { icon: 'youtube',   label: 'YouTube',    href: '#' },
      { icon: 'instagram', label: 'Instagram',  href: '#' },
      { icon: 'mail',      label: 'Newsletter', href: '#' },
    ],
    copyright: '© 2026 Cathleen Qin. All rights reserved.',
  },
};
