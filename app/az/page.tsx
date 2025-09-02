import dynamic from 'next/dynamic'
import { generatePageMetadata } from '@/lib/seo-config'

const Layout = dynamic(() => import('../../components/landing/Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

// Generate Azerbaijani metadata
export const metadata = generatePageMetadata('home', 'az')

export default function AzerbaijaniHome() {
  return (
    <Layout currentPageName="Landing" language="az">
      <Landing language="az" />
    </Layout>
  )
}
