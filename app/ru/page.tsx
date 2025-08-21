import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../../components/landing/Layout'), { ssr: false })
const Landing = dynamic(() => import('../landing'), { ssr: false })

export default function RussianHome() {
  return (
    <Layout currentPageName="Landing" language="ru">
      <Landing language="ru" />
    </Layout>
  )
}
