import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../components/landing/Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function EnglishHome() {
  return (
    <Layout currentPageName="Landing" language="en">
      <Landing language="en" />
    </Layout>
  )
}
