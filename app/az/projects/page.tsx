"use client";

import dynamic from 'next/dynamic';
import { getPortfolioData } from '@/lib/static-i18n';

const PortfolioPage = dynamic(() => import('../../../components/landing/PortfolioPage'), { ssr: false })

export default function AzerbaijaniPortfolio() {
  const portfolioData = getPortfolioData('az')

  return (
    <PortfolioPage language="az" portfolioData={portfolioData} />
  )
}
