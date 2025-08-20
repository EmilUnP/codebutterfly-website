import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function EnglishHome() {
  return (
    <Layout currentPageName="Landing">
      <Landing language="en" />
    </Layout>
  )
}
