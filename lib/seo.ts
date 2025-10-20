import type { Metadata } from "next";
import seoImage from "@/app/assets/seo-image.jpg";
import { siteConfig } from "@/config/site";

const SITE_URL = new URL(siteConfig.url);

const DEFAULT_TITLE = `${siteConfig.name} - Custom Infrastructure Solutions`;
const DEFAULT_DESCRIPTION = siteConfig.description;

function resolveImageUrl(): string {
  try {
    // seoImage can be a string or an object with a `src` prop depending on Next's loader
    const img: unknown = seoImage as unknown;
    if (typeof img === "string") {
      return new URL(img, SITE_URL).toString();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyImg = img as any;
    if (anyImg && anyImg.src) {
      return new URL(anyImg.src, SITE_URL).toString();
    }
  } catch (e) {
    // fallthrough to default
  }

  // fallback to site config image path
  return new URL(siteConfig.ogImage || "/assets/seo-image.jpg", SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  alt,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  alt?: string;
} = {}): Metadata {
  const imageUrl = resolveImageUrl();
  const pageTitle = title ? `${title} | VaultScope` : DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const canonical = new URL(path ?? '/', SITE_URL).toString();

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
    authors: [{ name: "VaultScope" }],
    creator: "VaultScope",
    publisher: "VaultScope",
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
      siteName: "VaultScope",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: alt ?? "VaultScope preview image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
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
