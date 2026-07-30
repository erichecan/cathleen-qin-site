"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

export const content = {
  en: {
    nav: { about: "About", offerings: "Offerings", membership: "Membership", journal: "Journal", contact: "Contact" },
    hero: {
      h1: ["hi,", "I’m Cathy"],
      sub: "I help women release what’s heavy, and grow into who they’re becoming — through Huizhimei Healing Center and the Huizhiling Women’s Growth Circle.",
      cta1: "Explore the offerings",
      cta2: "Read the Journal",
    },
    positioning: {
      pre: "Emotional healing mentor",
      mid: " and founder of Huizhimei Healing Center",
      post: " and the Huizhiling Women’s Growth Circle.",
    },
    about: {
      eyebrow: "About",
      h2: "The healing comes first. Everything else follows.",
      p1: "Cathy Qin spent years watching people chase their next chapter while carrying a heaviness no one had helped them put down. So she built the room she wished she’d had — first Huizhimei Healing Center, then the Huizhiling Women’s Growth Circle — spaces where women deal with what’s underneath before they try to build what’s next.",
      quote: "I’ve lived your hardship. I’ve held your dream. As a woman who has walked this path myself, I understand — because I’ve been there.",
      quoteAttr: "— Cathy Qin",
    },
    offerings: {
      eyebrow: "Offerings",
      h2: "Two rooms. One belief.",
      intro: "Healing and growth were never meant to be separate — so Cathy built both under one roof.",
      items: [
        {
          name: "Huizhimei Healing Center",
          desc: "Acupuncture, massage therapy, traditional Chinese medicine, and energy healing — for the pain, insomnia, and heaviness that talk alone doesn’t reach.",
        },
        {
          name: "Huizhiling Women’s Growth Circle",
          desc: "A community that pairs real government start-up support with marketing guidance, helping women build the business their next chapter needs.",
        },
      ],
    },
    stats: {
      items: [
        { value: "19+", label: "years walking this path" },
        { value: "10,000+", label: "women supported" },
        { value: "5★", label: "average rating" },
      ],
    },
    speaking: {
      eyebrow: "Speaking",
      h2: "Talks built from the room, not a slide template.",
      body: "Cathy speaks to women’s circles, wellness communities, and organizations who want more than motivation — they want someone who has actually built what she’s talking about.",
      talks: [
        {
          title: "Healing Is Infrastructure, Not an Afterthought",
          desc: "Why growth built on top of unprocessed pain doesn’t hold — and what to build instead.",
        },
        {
          title: "Why Women’s Growth Needs a Room of Its Own",
          desc: "What changes when women stop growing alone — lessons from building a circle of them.",
        },
        {
          title: "What the Universe Meets You With, When You Put the Weight Down",
          desc: "On releasing what you’re carrying, and making room for what you’re attracting next.",
        },
      ],
    },
    comingSoon: {
      eyebrow: "Coming Soon",
      h2: "What’s next, before it’s here.",
      intro: "Three ways to keep growing with Cathy beyond the two rooms already open.",
      badge: "Coming soon",
      items: [
        {
          name: "Membership",
          desc: "A weekly space for healing practices, live guidance, and the Growth Circle community — from anywhere.",
        },
        {
          name: "Live Events",
          desc: "In-person workshops and retreats built around healing and women’s growth.",
        },
        {
          name: "Coaching Certification",
          desc: "For practitioners who want to bring this work into their own community.",
        },
      ],
    },
    moments: {
      eyebrow: "Moments",
      h2: "The real rooms, in photographs.",
      intro: "From healing circles to growth club gatherings — these are the rooms Cathy has actually built, together with the women in them.",
    },
    journal: {
      eyebrow: "Journal",
      h2: "Notes from the work, not from the podium.",
      intro: "Published weekly — the same conversations Cathy has with clients and her team, written down before the polish sets in.",
      posts: [
        {
          title: "What I Carried Before I Knew How to Put It Down",
          dek: "What healing actually asked of me — and what it taught me about starting over.",
          meta: "5 min read",
        },
        {
          title: "Growth Doesn’t Work Without Healing First",
          dek: "Why Cathy stopped treating the two as separate.",
          meta: "4 min read",
        },
        {
          title: "What Every Woman in the Circle Is Really Asking",
          dek: "The thing underneath the question, almost every time.",
          meta: "6 min read",
        },
      ],
    },
    contact: {
      eyebrow: "Stay in touch",
      h2: "One honest email. No noise.",
      body: "Join the list for new Journal entries and early word on events — nothing else.",
      emailPlaceholder: "you@email.com",
      submitLabel: "Subscribe",
      submittedMsg: "You’re on the list. Look for the first note soon.",
      contactNote: "For speaking inquiries and partnerships, reach out directly at",
    },
  },
  zh: {
    nav: { about: "关于", offerings: "服务", membership: "会员", journal: "专栏", contact: "联系" },
    hero: {
      h1: ["嗨，", "我是 Cathy"],
      sub: "我陪伴女性放下沉重的部分，长成正在成为的样子——通过慧之美疗愈中心与慧之灵女性成长俱乐部。",
      cta1: "了解我的服务",
      cta2: "阅读专栏",
    },
    positioning: {
      pre: "情绪疗愈导师",
      mid: "，慧之美疗愈中心创始人",
      post: "，慧之灵女性成长俱乐部发起人。",
    },
    about: {
      eyebrow: "关于",
      h2: "疗愈在先，其余的自然会跟上来。",
      p1: "Cathy 看过太多人一边追赶人生的下一章，一边背着从没有人帮她们放下的沉重。于是她搭建了自己曾经希望拥有的那个空间——先是慧之美疗愈中心，后来是慧之灵女性成长俱乐部——让女性先处理好内在的东西，再去建造想要的未来。",
      quote: "因为我经历过你的艰辛，也怀抱过你的梦想，作为一位走过这条路的女性，我能够感同身受。",
      quoteAttr: "— Cathy",
    },
    offerings: {
      eyebrow: "服务",
      h2: "两个空间，一个信念。",
      intro: "疗愈和成长从来不该被分开——所以 Cathy 把它们放进了同一个屋檐下。",
      items: [
        {
          name: "慧之美疗愈中心",
          desc: "针灸、按摩治疗、中医与能量疗愈——处理那些只靠“聊”触及不到的疼痛、失眠与沉重感。",
        },
        {
          name: "慧之灵女性成长俱乐部",
          desc: "把真实的政府创业支持和专业营销指导结合在一起的社群，帮助女性建立起人生下一章需要的事业。",
        },
      ],
    },
    stats: {
      items: [
        { value: "19+", label: "年一路同行" },
        { value: "10,000+", label: "位女性获得支持" },
        { value: "5★", label: "平均评分" },
      ],
    },
    speaking: {
      eyebrow: "演讲",
      h2: "从真实现场里长出来的演讲，不是 PPT 模板。",
      body: "Cathy 面向女性社群、身心健康社区和组织演讲——他们想要的不只是打鸡血，而是一个真正把自己所说的东西亲手建成过的人。",
      talks: [
        {
          title: "“疗愈”是基础设施，不是可选项",
          desc: "为什么建在未处理的伤痛之上的成长撑不住——以及该建些什么才对。",
        },
        {
          title: "“女性成长”为什么需要一个专属的空间",
          desc: "当女性不再独自成长时会发生什么——搭建一个社群的心得。",
        },
        {
          title: "放下重量之后，宇宙会用什么迎接你",
          desc: "关于释放你背负的东西，为接下来要吸引的一切腾出空间。",
        },
      ],
    },
    comingSoon: {
      eyebrow: "即将推出",
      h2: "在它到来之前，先让你知道。",
      intro: "除了已经开放的两个空间，还有三种方式可以继续和 Cathy 一起成长。",
      badge: "即将推出",
      items: [
        {
          name: "会员社区",
          desc: "每周的疗愈练习、实时指导与成长俱乐部社群——无论你在哪里。",
        },
        {
          name: "线下活动",
          desc: "围绕疗愈与女性成长搭建的线下工作坊和静修活动。",
        },
        {
          name: "教练认证项目",
          desc: "给想把这套方法带进自己社群的从业者。",
        },
      ],
    },
    moments: {
      eyebrow: "精彩瞬间",
      h2: "真实的现场，都藏在这些照片里。",
      intro: "从疗愈圈到成长俱乐部的聚会——这些都是 Cathy 和这些女性一起搭建起来的真实空间。",
    },
    journal: {
      eyebrow: "专栏",
      h2: "写自真实的功课现场，而非讲台之上。",
      intro: "每周更新——把 Cathy 和客户、和团队聊过的那些对话，趁还没被“修饰”之前，先写下来。",
      posts: [
        {
          title: "在我学会放下之前，我一直背着的东西",
          dek: "疗愈到底向我要求了什么——它教会了我怎么重新开始。",
          meta: "5 分钟阅读",
        },
        {
          title: "没有先“疗愈”，成长就落不了地",
          dek: "Cathy 为什么不再把这两件事分开做。",
          meta: "4 分钟阅读",
        },
        {
          title: "俱乐部里每一位女性真正想问的那件事",
          dek: "几乎每一次，问题背后藏着的都是同一件事。",
          meta: "6 分钟阅读",
        },
      ],
    },
    contact: {
      eyebrow: "保持联系",
      h2: "一封真诚的邮件，没有多余的噪音。",
      body: "订阅后，你会收到新的专栏文章和活动的第一手消息——仅此而已。",
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
