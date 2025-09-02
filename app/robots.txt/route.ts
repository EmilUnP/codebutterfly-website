import { generateRobotsTxtContent } from '@/lib/seo-utils';

export async function GET() {
  const robots = generateRobotsTxtContent();
  
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  });
}
