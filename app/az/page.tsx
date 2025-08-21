import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../components/landing/Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function AzerbaijaniHome() {
  return (
    <Layout currentPageName="Landing" language="az">
      <Landing language="az" />
    </Layout>
  )
}
