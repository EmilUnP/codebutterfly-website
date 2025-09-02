import dynamic from 'next/dynamic'
import { generatePageMetadata } from '@/lib/seo-config'

const Layout = dynamic(() => import('../../components/landing/Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

// Generate Russian metadata
export const metadata = generatePageMetadata('home', 'ru')

export default function RussianHome() {
  return (
    <Layout currentPageName="Landing" language="ru">
      <Landing language="ru" />
    </Layout>
  )
}
