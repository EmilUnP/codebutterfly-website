"use client";

import dynamic from 'next/dynamic';
import { getPortfolioData } from '@/lib/static-i18n';

const PortfolioPage = dynamic(() => import('../../../components/landing/PortfolioPage'), { ssr: false })

export default function EnglishPortfolio() {
  const portfolioData = getPortfolioData('en')

  return (
    <PortfolioPage language="en" portfolioData={portfolioData} />
  )
}
