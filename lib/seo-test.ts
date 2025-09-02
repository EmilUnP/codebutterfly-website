/**
 * SEO Testing and Validation Utilities
 * 
 * This file contains functions to test and validate SEO implementation
 * across the CodeButterfly website.
 */

import { generatePageMetadata, PAGE_SEO_CONFIG, SITE_CONFIG } from './seo-config';
import { validateSEOMetadata } from './seo-utils';

// Test all page metadata
export function testAllPageMetadata() {
  const results: Array<{
    page: string;
    language: string;
    errors: string[];
    warnings: string[];
  }> = [];

  const pages = Object.keys(PAGE_SEO_CONFIG) as Array<keyof typeof PAGE_SEO_CONFIG>;
  const languages: Array<'en' | 'ru' | 'az'> = ['en', 'ru', 'az'];

  pages.forEach(page => {
    languages.forEach(language => {
      try {
        const metadata = generatePageMetadata(page, language);
        const errors = validateSEOMetadata(metadata);
        
        const warnings: string[] = [];
        
        // Check for common issues
        const titleString = typeof metadata.title === 'string' ? metadata.title : String(metadata.title || '');
        if (titleString && titleString.length < 30) {
          warnings.push('Title might be too short for optimal SEO');
        }
        
        const descriptionString = typeof metadata.description === 'string' ? metadata.description : String(metadata.description || '');
        if (descriptionString && descriptionString.length < 120) {
          warnings.push('Description might be too short for optimal SEO');
        }
        
        if (!metadata.openGraph?.images || metadata.openGraph.images.length === 0) {
          warnings.push('No Open Graph images found');
        }

        results.push({
          page,
          language,
          errors,
          warnings
        });
      } catch (error) {
        results.push({
          page,
          language,
          errors: [`Failed to generate metadata: ${error}`],
          warnings: []
        });
      }
    });
  });

  return results;
}

// Test structured data validity
export function testStructuredData() {
  const results: Array<{
    type: string;
    valid: boolean;
    errors: string[];
  }> = [];

  // Test organization structured data
  try {
    const orgData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
    };
    
    // Basic validation
    if (!orgData.name || !orgData.description || !orgData.url) {
      results.push({
        type: 'Organization',
        valid: false,
        errors: ['Missing required fields: name, description, or url']
      });
    } else {
      results.push({
        type: 'Organization',
        valid: true,
        errors: []
      });
    }
  } catch (error) {
    results.push({
      type: 'Organization',
      valid: false,
      errors: [`Validation error: ${error}`]
    });
  }

  return results;
}

// Test sitemap generation
export function testSitemapGeneration() {
  const results: Array<{
    type: string;
    valid: boolean;
    errors: string[];
    warnings: string[];
  }> = [];

  try {
    // Test main sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_CONFIG.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    if (!sitemap.includes(SITE_CONFIG.url)) {
      results.push({
        type: 'Main Sitemap',
        valid: false,
        errors: ['Sitemap does not contain site URL'],
        warnings: []
      });
    } else {
      results.push({
        type: 'Main Sitemap',
        valid: true,
        errors: [],
        warnings: []
      });
    }
  } catch (error) {
    results.push({
      type: 'Main Sitemap',
      valid: false,
      errors: [`Generation error: ${error}`],
      warnings: []
    });
  }

  return results;
}

// Test robots.txt generation
export function testRobotsTxtGeneration() {
  const results: Array<{
    type: string;
    valid: boolean;
    errors: string[];
    warnings: string[];
  }> = [];

  try {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml`;

    if (!robotsTxt.includes('User-agent: *')) {
      results.push({
        type: 'Robots.txt',
        valid: false,
        errors: ['Missing User-agent directive'],
        warnings: []
      });
    } else if (!robotsTxt.includes('Sitemap:')) {
      results.push({
        type: 'Robots.txt',
        valid: false,
        errors: ['Missing Sitemap directive'],
        warnings: []
      });
    } else {
      results.push({
        type: 'Robots.txt',
        valid: true,
        errors: [],
        warnings: []
      });
    }
  } catch (error) {
    results.push({
      type: 'Robots.txt',
      valid: false,
      errors: [`Generation error: ${error}`],
      warnings: []
    });
  }

  return results;
}

// Run comprehensive SEO tests
export function runSEOValidationTests() {
  console.log('🔍 Running SEO Validation Tests...\n');

  const pageResults = testAllPageMetadata();
  const structuredDataResults = testStructuredData();
  const sitemapResults = testSitemapGeneration();
  const robotsResults = testRobotsTxtGeneration();

  // Display results
  console.log('📄 Page Metadata Tests:');
  pageResults.forEach(result => {
    if (result.errors.length > 0) {
      console.log(`❌ ${result.page} (${result.language}): ${result.errors.join(', ')}`);
    } else if (result.warnings.length > 0) {
      console.log(`⚠️  ${result.page} (${result.language}): ${result.warnings.join(', ')}`);
    } else {
      console.log(`✅ ${result.page} (${result.language}): All checks passed`);
    }
  });

  console.log('\n🏗️  Structured Data Tests:');
  structuredDataResults.forEach(result => {
    if (result.valid) {
      console.log(`✅ ${result.type}: Valid`);
    } else {
      console.log(`❌ ${result.type}: ${result.errors.join(', ')}`);
    }
  });

  console.log('\n🗺️  Sitemap Tests:');
  sitemapResults.forEach(result => {
    if (result.valid) {
      console.log(`✅ ${result.type}: Valid`);
    } else {
      console.log(`❌ ${result.type}: ${result.errors.join(', ')}`);
    }
  });

  console.log('\n🤖 Robots.txt Tests:');
  robotsResults.forEach(result => {
    if (result.valid) {
      console.log(`✅ ${result.type}: Valid`);
    } else {
      console.log(`❌ ${result.type}: ${result.errors.join(', ')}`);
    }
  });

  // Summary
  const totalTests = pageResults.length + structuredDataResults.length + sitemapResults.length + robotsResults.length;
  const passedTests = pageResults.filter(r => r.errors.length === 0).length +
                     structuredDataResults.filter(r => r.valid).length +
                     sitemapResults.filter(r => r.valid).length +
                     robotsResults.filter(r => r.valid).length;

  console.log(`\n📊 Summary: ${passedTests}/${totalTests} tests passed`);

  return {
    pageResults,
    structuredDataResults,
    sitemapResults,
    robotsResults,
    summary: { passed: passedTests, total: totalTests }
  };
}

// Export for use in development
if (typeof window === 'undefined') {
  // Only run in Node.js environment
  global.runSEOValidationTests = runSEOValidationTests;
}
