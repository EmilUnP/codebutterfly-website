"use client";

import dynamic from 'next/dynamic';

const PortfolioPage = dynamic(() => import('../../../components/landing/PortfolioPage'), { ssr: false })

export default function AzerbaijaniPortfolio() {
  return (
    <PortfolioPage language="az" />
  )
}
