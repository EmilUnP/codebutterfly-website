import { generateSitemapXmlContent } from '@/lib/seo-utils';

export async function GET() {
  const sitemap = generateSitemapXmlContent();
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  });
}
