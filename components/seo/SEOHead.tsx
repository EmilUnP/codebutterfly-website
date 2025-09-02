/**
 * SEO Head Component for CodeButterfly Website
 * 
 * This component provides a centralized way to manage SEO metadata
 * and structured data for all pages.
 */

import React from 'react';
import Head from 'next/head';
import { Language } from '@/lib/static-i18n';
import { generatePageMetadata } from '@/lib/seo-config';
import { generatePageStructuredData, generatePerformanceHints, generateAccessibilityMetaTags } from '@/lib/seo-utils';

interface SEOHeadProps {
  page: 'home' | 'team' | 'projects' | 'about' | 'contact';
  language?: Language;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  noIndex?: boolean;
  structuredData?: any[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  page,
  language = 'en',
  customTitle,
  customDescription,
  customKeywords,
  noIndex = false,
  structuredData = []
}) => {
  // Generate base metadata
  const baseMetadata = generatePageMetadata(page, language);
  
  // Override with custom values if provided
  const title = customTitle || (typeof baseMetadata.title === 'string' ? baseMetadata.title : 'CodeButterfly');
  const description = customDescription || (typeof baseMetadata.description === 'string' ? baseMetadata.description : '');
  const keywords = customKeywords || (typeof baseMetadata.keywords === 'string' ? baseMetadata.keywords : '');
  const author = Array.isArray(baseMetadata.authors) ? baseMetadata.authors[0]?.name : baseMetadata.authors?.name || 'CodeButterfly Team';

  // Generate structured data
  const pageStructuredData = generatePageStructuredData(page, language);
  const allStructuredData = [...pageStructuredData, ...structuredData];

  // Helper function to safely get string values
  const getStringValue = (value: any): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return value.toString();
    if (Array.isArray(value)) return value.join(', ');
    return '';
  };

  // Helper function to safely get URL values
  const getUrlValue = (value: any): string => {
    if (typeof value === 'string') return value;
    if (value instanceof URL) return value.toString();
    return '';
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph Meta Tags */}
      {baseMetadata.openGraph && (
        <>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={getStringValue(baseMetadata.openGraph.title)} />
          <meta property="og:description" content={getStringValue(baseMetadata.openGraph.description)} />
          <meta property="og:url" content={getUrlValue(baseMetadata.openGraph.url)} />
          <meta property="og:site_name" content={getStringValue(baseMetadata.openGraph.siteName)} />
          <meta property="og:locale" content={getStringValue(baseMetadata.openGraph.locale)} />
          {Array.isArray(baseMetadata.openGraph.images) && baseMetadata.openGraph.images.map((image: any, index: number) => (
            <React.Fragment key={index}>
              <meta property="og:image" content={getStringValue(image.url)} />
              {image.width && <meta property="og:image:width" content={image.width.toString()} />}
              {image.height && <meta property="og:image:height" content={image.height.toString()} />}
              {image.alt && <meta property="og:image:alt" content={getStringValue(image.alt)} />}
            </React.Fragment>
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      {baseMetadata.twitter && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={getStringValue(baseMetadata.twitter.site)} />
          <meta name="twitter:creator" content={getStringValue(baseMetadata.twitter.creator)} />
          <meta name="twitter:title" content={getStringValue(baseMetadata.twitter.title)} />
          <meta name="twitter:description" content={getStringValue(baseMetadata.twitter.description)} />
          {Array.isArray(baseMetadata.twitter.images) && baseMetadata.twitter.images.map((image: any, index: number) => (
            <meta key={index} name="twitter:image" content={getStringValue(image)} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      {baseMetadata.alternates?.canonical && (
        <link rel="canonical" href={getUrlValue(baseMetadata.alternates.canonical)} />
      )}
      
      {/* Alternate Language Versions */}
      {baseMetadata.alternates?.languages && Object.entries(baseMetadata.alternates.languages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={getUrlValue(url)} />
      ))}
      
      {/* Verification Tags */}
      {baseMetadata.verification && (
        <>
          {baseMetadata.verification.google && (
            <meta name="google-site-verification" content={getStringValue(baseMetadata.verification.google)} />
          )}
          {baseMetadata.verification.yandex && (
            <meta name="yandex-verification" content={getStringValue(baseMetadata.verification.yandex)} />
          )}
        </>
      )}
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Performance and Accessibility Hints */}
      <div dangerouslySetInnerHTML={{ __html: generatePerformanceHints() }} />
      <div dangerouslySetInnerHTML={{ __html: generateAccessibilityMetaTags() }} />
    </Head>
  );
};

export default SEOHead;
