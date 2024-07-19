import { SOURCE } from "@/constants";
import type { Metadata } from "next";

interface SiteConfig {
  readonly links: {
    readonly twitter: string;
    readonly github: string;
  };
  readonly description: string;
  readonly mailSupport: string;
  readonly ogImage: string;
  readonly name: string;
  readonly url: string;
}

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
  readonly description?: string;
  readonly noIndex?: boolean;
  readonly title?: string;
  readonly image?: string;
  readonly icons?: string;
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
