import { useEffect } from 'react';
import {
  SITE_NAME,
  BASE_URL,
  DEFAULT_DESCRIPTION,
  buildTitle,
  buildCanonicalUrl,
  buildBreadcrumbJsonLd,
} from '@/utils/seo';
import type { BreadcrumbItem } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
}

function setMetaTag(property: string, content: string, isOg = false) {
  const attr = isOg ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(json: string) {
  const id = 'seo-jsonld';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = json;
}

export function SEOHead({ title, description, path, breadcrumbs }: SEOHeadProps) {
  const fullTitle = buildTitle(title);
  const desc = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = buildCanonicalUrl(path);

  useEffect(() => {
    document.title = fullTitle;

    setMetaTag('description', desc);

    // OGP
    const ogImage = `${BASE_URL}/images/og-image.png`;
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', desc, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:locale', 'ja_JP', true);
    setMetaTag('og:image', ogImage, true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', desc);
    setMetaTag('twitter:image', ogImage);

    // canonical
    setLinkTag('canonical', canonicalUrl);

    // JSON-LD
    if (breadcrumbs && breadcrumbs.length > 0) {
      setJsonLd(buildBreadcrumbJsonLd(breadcrumbs));
    }
  }, [fullTitle, desc, canonicalUrl, breadcrumbs]);

  return null;
}
