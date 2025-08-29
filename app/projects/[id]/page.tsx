import { redirect } from 'next/navigation';
import { getPortfolioData } from '@/lib/static-i18n';

// Generate static params for all portfolio items (required for static export)
export async function generateStaticParams() {
  const portfolioData = getPortfolioData('en')
  return portfolioData.map((item) => ({
    id: item.id.toString(),
  }))
}

interface Props {
  params: { id: string }
}

export default function ProjectDetailRedirect({ params }: Props) {
  // Server-side redirect to English project detail page
  redirect(`/en/projects/${params.id}`);
}
