import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function AzerbaijaniHome() {
  return (
    <Layout currentPageName="Landing">
      <Landing language="az" />
    </Layout>
  )
}
