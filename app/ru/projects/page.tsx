"use client";

import dynamic from 'next/dynamic';
import { getPortfolioData } from '@/lib/static-i18n';

const PortfolioPage = dynamic(() => import('../../../components/landing/PortfolioPage'), { ssr: false })

export default function RussianPortfolio() {
  const portfolioData = getPortfolioData('ru')

  return (
    <PortfolioPage language="ru" portfolioData={portfolioData} />
  )
}
