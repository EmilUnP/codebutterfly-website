"use client";

import dynamic from 'next/dynamic';

const PortfolioPage = dynamic(() => import('../../../components/landing/PortfolioPage'), { ssr: false })

export default function RussianPortfolio() {
  return (
    <PortfolioPage language="ru" />
  )
}
