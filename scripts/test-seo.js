#!/usr/bin/env node

/**
 * SEO Testing Script for CodeButterfly Website
 * 
 * This script runs comprehensive SEO validation tests
 * to ensure all SEO implementations are working correctly.
 */

const { runSEOValidationTests } = require('../lib/seo-test.ts');

console.log('🚀 CodeButterfly SEO Validation Tests');
console.log('=====================================\n');

try {
  const results = runSEOValidationTests();
  
  if (results.summary.passed === results.summary.total) {
    console.log('\n🎉 All SEO tests passed! Your implementation is ready for production.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some SEO tests failed. Please review the errors above.');
    process.exit(1);
  }
} catch (error) {
  console.error('\n❌ Error running SEO tests:', error.message);
  process.exit(1);
}
