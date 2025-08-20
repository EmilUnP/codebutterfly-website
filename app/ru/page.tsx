import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function RussianHome() {
  return (
    <Layout currentPageName="Landing">
      <Landing language="ru" />
    </Layout>
  )
}
