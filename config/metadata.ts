import { SOURCE } from "@/constants";
import { Metadata } from "next";

type SiteConfig = {
  links: {
    twitter: string;
    github: string;
  };
  description: string;
  mailSupport: string;
  ogImage: string;
  name: string;
  url: string;
};

const site_url = SOURCE;

const siteConfig: SiteConfig = {
  links: {
    github: "https://github.com/nikitarevenco/nextjs-skeleton",
    twitter: "https://twitter.com/nikitarevenco",
  },
  mailSupport: "support@nextjs-skeleton.fake",
  ogImage: `${site_url}/_static/og.jpg`,
  description: "NextJS Skeleton",
  name: "Next JS Skeleton",
  url: site_url,
};

export function constructMetadata({
  description = siteConfig.description,
  image = siteConfig.ogImage,
  title = siteConfig.name,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  description?: string;
  noIndex?: boolean;
  title?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    keywords: [
      "Next.js",
      "React",
      "Prisma",
      "Neon",
      "Auth.js",
      "shadcn ui",
      "Resend",
      "React Email",
      "Stripe",
    ],
    openGraph: {
      url: siteConfig.url,
      type: "website",
      locale: "en_US",
      siteName: title,
      description,
      title,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@nikitarevenco",
      images: [image],
      description,
      title,
    },
    authors: [
      {
        name: "nikitarevenco",
      },
    ],
    manifest: `${siteConfig.url}/site.webmanifest`,
    metadataBase: new URL(siteConfig.url),
    creator: "nikitarevenco",
    description,
    title,
    icons,
    ...(noIndex && {
      robots: {
        follow: false,
        index: false,
      },
    }),
  };
}
