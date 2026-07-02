import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "豬豬隊友scott & wendy",
  tagline: "團購優惠與生活分享",
  description:
    "豬豬隊友scott & wendy 分享團購優惠、生活好物與最新文章。",
  description_short:
    "團購優惠、生活好物與最新文章。",
  url: "https://piglet.vercel.app",
  author: "豬豬隊友scott & wendy",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "zh_TW",
  type: "website",
  url: SITE.url,
  title: SITE.title,
  description: SITE.description,
  image: ogImageSrc,
};
