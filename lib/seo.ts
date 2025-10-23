import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const SITE_URL = new URL(siteConfig.url);

const DEFAULT_TITLE = `${siteConfig.name} - Custom Infrastructure Solutions`;
const DEFAULT_DESCRIPTION = siteConfig.description;
const DEFAULT_OG_IMAGE_PATH = siteConfig.ogImage || "/assets/seo-image.jpg";

function buildAbsoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

function resolveImageUrl(image?: string): string {
  return buildAbsoluteUrl(image ?? DEFAULT_OG_IMAGE_PATH);
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  alt,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  alt?: string;
  image?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const canonical = buildAbsoluteUrl(path ?? "/");
  const imageUrl = resolveImageUrl(image);
  const imageAlt = alt ?? `${siteConfig.name} preview image`;

  return {
    metadataBase: SITE_URL,
    title: pageTitle,
    description: pageDescription,
    keywords:
      keywords ?? [
        "custom VPS",
        "dedicated servers",
        "enterprise hosting",
        "scalable infrastructure",
        "custom server configuration",
        "high performance hosting",
        "enterprise infrastructure",
        "managed hosting",
      ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: "https://vaultscope.dev/assets/seo-image.jpg",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://vaultscope.dev/assets/seo-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
