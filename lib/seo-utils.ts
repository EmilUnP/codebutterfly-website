/**
 * SEO Utility Functions for CodeButterfly Website
 * 
 * This file contains utility functions for generating SEO metadata,
 * structured data, and other SEO-related functionality.
 */

import { Metadata } from 'next';
import { Language } from './static-i18n';
import { SITE_CONFIG, generatePageMetadata, generateOrganizationStructuredData, generateWebsiteStructuredData } from './seo-config';

// Generate robots.txt content
export function generateRobotsTxtContent(): string {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_CONFIG.url}/sitemap.xml
Sitemap: ${SITE_CONFIG.url}/sitemap-images.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow all other content
Allow: /`;
}

// Generate sitemap.xml content
export function generateSitemapXmlContent(): string {
  const currentDate = new Date().toISOString();
  const languages: Language[] = ['en', 'ru', 'az'];
  const pages = ['', '/team', '/projects', '/about', '/contact'];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Add homepage for each language
  languages.forEach(lang => {
    const langPrefix = lang === 'en' ? '' : `/${lang}`;
    const url = `${SITE_CONFIG.url}${langPrefix}`;
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>`;
    
    // Add alternate language versions
    languages.forEach(altLang => {
      const altLangPrefix = altLang === 'en' ? '' : `/${altLang}`;
      const altUrl = `${SITE_CONFIG.url}${altLangPrefix}`;
      sitemap += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />`;
    });
    
    sitemap += `
  </url>`;
  });

  // Add other pages for each language
  pages.slice(1).forEach(page => {
    languages.forEach(lang => {
      const langPrefix = lang === 'en' ? '' : `/${lang}`;
      const url = `${SITE_CONFIG.url}${langPrefix}${page}`;
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>`;
      
      // Add alternate language versions
      languages.forEach(altLang => {
        const altLangPrefix = altLang === 'en' ? '' : `/${altLang}`;
        const altUrl = `${SITE_CONFIG.url}${altLangPrefix}${page}`;
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />`;
      });
      
      sitemap += `
  </url>`;
    });
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Generate image sitemap content
export function generateImageSitemapXmlContent(): string {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_CONFIG.url}/</loc>
    <image:image>
      <image:loc>${SITE_CONFIG.url}${SITE_CONFIG.logo}</image:loc>
      <image:title>CodeButterfly Logo</image:title>
      <image:caption>CodeButterfly - Digital Design Studio Logo</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_CONFIG.url}${SITE_CONFIG.ogImage}</image:loc>
      <image:title>CodeButterfly Open Graph Image</image:title>
      <image:caption>CodeButterfly - Digital Design Studio</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/team</loc>
    <image:image>
      <image:loc>${SITE_CONFIG.url}/Founder.jpg</image:loc>
      <image:title>Gulnar Talibova - Founder & Designer</image:title>
      <image:caption>Gulnar Talibova, Founder and Designer at CodeButterfly</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_CONFIG.url}/designer.jpg</image:loc>
      <image:title>Artemis - UI/UX Designer</image:title>
      <image:caption>Artemis, UI/UX Designer at CodeButterfly</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_CONFIG.url}/manager.jpg</image:loc>
      <image:title>Artimur - Project Manager</image:title>
      <image:caption>Artimur, Project Manager at CodeButterfly</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_CONFIG.url}/developer.jpg</image:loc>
      <image:title>Emil Talybov - CTO</image:title>
      <image:caption>Emil Talybov, CTO at CodeButterfly</image:caption>
    </image:image>
  </url>
</urlset>`;
}

// Generate JSON-LD structured data for a specific page
export function generatePageStructuredData(page: string, language: Language = 'en') {
  const baseStructuredData = [
    generateOrganizationStructuredData(),
    generateWebsiteStructuredData()
  ];

  // Add page-specific structured data
  switch (page) {
    case 'team':
      return baseStructuredData;
    case 'projects':
      return [
        ...baseStructuredData,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'CodeButterfly Portfolio',
          description: 'Our portfolio of successful web development projects',
          url: `${SITE_CONFIG.url}/${language === 'en' ? '' : language + '/'}projects`,
          mainEntity: {
            '@type': 'ItemList',
            name: 'Web Development Projects',
            description: 'Collection of web development projects and case studies'
          }
        }
      ];
    case 'about':
      return [
        ...baseStructuredData,
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About CodeButterfly',
          description: 'Learn about CodeButterfly\'s mission and team',
          url: `${SITE_CONFIG.url}/${language === 'en' ? '' : language + '/'}about`,
          mainEntity: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            description: SITE_CONFIG.description
          }
        }
      ];
    case 'contact':
      return [
        ...baseStructuredData,
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CodeButterfly',
          description: 'Get in touch with CodeButterfly for your next project',
          url: `${SITE_CONFIG.url}/${language === 'en' ? '' : language + '/'}contact`,
          mainEntity: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              email: 'info@codebutterfly.com'
            }
          }
        }
      ];
    default:
      return baseStructuredData;
  }
}



// Validate SEO metadata
export function validateSEOMetadata(metadata: Metadata): string[] {
  const errors: string[] = [];
  
  const titleString = typeof metadata.title === 'string' ? metadata.title : String(metadata.title || '');
  if (!titleString || titleString.length < 30 || titleString.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }
  
  const descriptionString = typeof metadata.description === 'string' ? metadata.description : String(metadata.description || '');
  if (!descriptionString || descriptionString.length < 120 || descriptionString.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }
  
  if (!metadata.openGraph?.title) {
    errors.push('Open Graph title is missing');
  }
  
  if (!metadata.openGraph?.description) {
    errors.push('Open Graph description is missing');
  }
  
  if (!metadata.openGraph?.images || metadata.openGraph.images.length === 0) {
    errors.push('Open Graph image is missing');
  }
  
  return errors;
}

// Generate performance hints for SEO
export function generatePerformanceHints(): string {
  return `
<!-- Performance and SEO hints -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />

<!-- Preload critical resources -->
<link rel="preload" href="/main-logo.png" as="image" type="image/png" />
<link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />

<!-- Resource hints for better performance -->
<meta http-equiv="x-dns-prefetch-control" content="on" />
<meta name="format-detection" content="telephone=no" />
<meta name="theme-color" content="#100721" />
<meta name="msapplication-TileColor" content="#100721" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
`;
}

// Generate accessibility meta tags
export function generateAccessibilityMetaTags(): string {
  return `
<!-- Accessibility meta tags -->
<meta name="color-scheme" content="dark light" />
<meta name="supported-color-schemes" content="dark light" />
<meta name="prefers-color-scheme" content="dark" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="CodeButterfly" />
`;
}
