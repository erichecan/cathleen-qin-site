"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

export const content = {
  en: {
    nav: { about: "About", speaking: "Speaking", moments: "Moments", journal: "Journal", contact: "Contact" },
    hero: {
      eyebrow: "Founder, Pioneer Group · Toronto",
      h1: ["I’ve lived your struggle.", "I’ve held your dream."],
      sub: "Cathy Qin immigrated with a dream and no roadmap, and spent the next 19 years turning that experience into Pioneer Group — a Toronto-based platform for career, community, and healing, built by someone who has actually been where you are.",
      cta1: "Watch Cathy speak",
      cta2: "Read the Journal",
    },
    about: {
      eyebrow: "About",
      h2: "Nineteen years. Four platforms. One belief.",
      p1: "In 2007, Cathy Qin founded what would become Pioneer Group — not from a business plan, but from her own experience arriving as an immigrant with a dream and no map for how to build it. Nineteen years later, that experience has grown into four platforms serving the Greater Toronto Area’s immigrant community.",
      platformsLabel: "The four platforms",
      platforms: [
        {
          name: "Pioneer Education & Career Consulting",
          desc: "Career guidance for people rebuilding a career in a new country.",
        },
        {
          name: "Huizhiling Women’s Growth Circle",
          desc: "A community for women growing into their next chapter, together.",
        },
        {
          name: "Huizhimei Healing Center",
          desc: "Because career advice doesn’t work if no one deals with the healing first.",
        },
        {
          name: "HR Solutions",
          desc: "Support for the businesses immigrants go on to build.",
        },
      ],
      quote: "I’ve lived your hardship. I’ve held your dream. As an immigrant entrepreneur myself, I understand — because I’ve been there.",
      quoteAttr: "— Cathy Qin",
    },
    speaking: {
      eyebrow: "Speaking",
      h2: "Talks built from nineteen years in the room, not a slide template.",
      body: "Cathy speaks to immigrant communities, women’s organizations, and businesses who want more than motivation — they want someone who has actually built what she’s talking about.",
      talks: [
        {
          title: "Building From What You’ve Survived",
          desc: "How the hardest chapter of an immigrant story becomes the foundation for a career, a company, or a community.",
        },
        {
          title: "Why Women’s Growth Needs a Room of Its Own",
          desc: "What changes when women stop growing alone — lessons from nineteen years of building one.",
        },
        {
          title: "Healing Is Infrastructure, Not an Afterthought",
          desc: "Why Pioneer Group built a healing center alongside a career consultancy — and why most organizations skip this step.",
        },
      ],
    },
    moments: {
      eyebrow: "Moments",
      h2: "Nineteen years, in photographs.",
      intro: "From orchard afternoons with the club to ribbon-cuttings and boardroom sessions — the real rooms Pioneer Group has built together.",
    },
    journal: {
      eyebrow: "Journal",
      h2: "Notes from nineteen years of building, not from the podium.",
      intro: "Published weekly, powered by Cathy’s own content system — the same conversations she has with clients and her team, written down before the polish sets in.",
      posts: [
        {
          title: "The Dream I Carried Off the Plane",
          dek: "What I actually had when I arrived — and what it taught me about starting from nothing.",
          meta: "5 min read",
        },
        {
          title: "Career Advice Doesn’t Work Without Healing First",
          dek: "Why Pioneer Group stopped treating the two as separate.",
          meta: "4 min read",
        },
        {
          title: "What 19 Years of Building for Immigrants Taught Me About Trust",
          dek: "The thing every client is really asking, underneath the paperwork.",
          meta: "6 min read",
        },
      ],
    },
    contact: {
      eyebrow: "Stay in touch",
      h2: "One honest email. No noise.",
      body: "Join the list for new Journal entries and early word on speaking dates — nothing else.",
      emailPlaceholder: "you@email.com",
      submitLabel: "Subscribe",
      submittedMsg: "You’re on the list. Look for the first note soon.",
      contactNote: "For speaking inquiries and partnerships, reach out directly at",
    },
  },
  zh: {
    nav: { about: "关于", speaking: "演讲", moments: "瞬间", journal: "专栏", contact: "联系" },
    hero: {
      eyebrow: "Pioneer Group 创始人 · 多伦多",
      h1: ["因为我经历过你的艰辛，", "也怀抱过你的梦想。"],
      sub: "Cathy 曾是一名怀揣梦想、却没有任何路线图的移民，用接下来的 19 年，把这段经历变成了 Pioneer Group——一个扎根多伦多、服务事业发展、社群与身心疗愈的平台，由一个真正走过这条路的人亲手搭建。",
      cta1: "看 Cathy 演讲",
      cta2: "阅读专栏",
    },
    about: {
      eyebrow: "关于",
      h2: "十九年，四个平台，一个信念。",
      p1: "2007 年，Cathy 创立了 Pioneer Group 的雏形——不是从一份商业计划书开始，而是从她自己作为移民、怀揣梦想却无路可循的亲身经历开始。十九年后，这段经历已经长成了服务大多伦多地区移民社群的四个平台。",
      platformsLabel: "四个平台",
      platforms: [
        {
          name: "Pioneer Education & Career Consulting",
          desc: "帮助在新的国家重新建立职业生涯的人们。",
        },
        {
          name: "慧之灵女性成长俱乐部",
          desc: "一个让女性一起成长、走向人生下一个阶段的社群。",
        },
        {
          name: "慧之美疗愈中心",
          desc: "因为如果没有人先处理好“疗愈”，职业建议就落不了地。",
        },
        {
          name: "人力资源解决方案",
          desc: "支持移民自己创办的企业。",
        },
      ],
      quote: "因为我经历过你的艰辛，也怀抱过你的梦想，作为一位移民创业者，我能够感同身受。",
      quoteAttr: "— Cathy",
    },
    speaking: {
      eyebrow: "演讲",
      h2: "十九年一线积累出来的演讲，不是从 PPT 模板里长出来的。",
      body: "Cathy 面向移民社群、女性组织和企业演讲——他们想要的不只是打鸡血，而是一个真正把自己所说的东西亲手建成过的人。",
      talks: [
        {
          title: "从熬过的那部分里，建出来的东西",
          desc: "移民故事里最难熬的那一章，如何变成一份事业、一家公司、一个社群的地基。",
        },
        {
          title: "“女性成长”为什么需要一个专属的空间",
          desc: "当女性不再独自成长时，会发生什么变化——十九年搭建一个社群的心得。",
        },
        {
          title: "“疗愈”是基础设施，不是可选项",
          desc: "为什么 Pioneer Group 会在职业咨询之外，专门搭建一个疗愈中心——以及为什么大多数组织会跳过这一步。",
        },
      ],
    },
    moments: {
      eyebrow: "精彩瞬间",
      h2: "十九年，都藏在这些照片里。",
      intro: "从俱乐部的果园聚会，到开业剪彩与圆桌研讨——这些都是 Pioneer Group 一起走过的真实现场。",
    },
    journal: {
      eyebrow: "专栏",
      h2: "写自十九年的建设现场，而非讲台之上。",
      intro: "每周更新，由 Cathy 自己的内容系统驱动——把她和客户、和团队聊过的那些对话，趁还没被“修饰”之前，先写下来。",
      posts: [
        {
          title: "我下飞机时，行李里装着的那个梦想",
          dek: "刚到的时候我真正拥有的是什么——它教会了我怎么从零开始。",
          meta: "5 分钟阅读",
        },
        {
          title: "没有先“疗愈”，职业建议就落不了地",
          dek: "Pioneer Group 为什么不再把这两件事分开做。",
          meta: "4 分钟阅读",
        },
        {
          title: "十九年为移民群体做事，教会我关于信任的一件事",
          dek: "每个客户在一堆文件背后，真正想问的其实是同一件事。",
          meta: "6 分钟阅读",
        },
      ],
    },
    contact: {
      eyebrow: "保持联系",
      h2: "一封真诚的邮件，没有多余的噪音。",
      body: "订阅后，你会收到新的专栏文章和演讲行程的第一手消息——仅此而已。",
      emailPlaceholder: "you@email.com",
      submitLabel: "订阅",
      submittedMsg: "你已经在名单上了，很快就会收到第一封邮件。",
      contactNote: "演讲邀约与合作洽谈，请直接联系",
    },
  },
};

type Content = typeof content.en;

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
  t: Content;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
