import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../Layout'), { ssr: false })
const Landing = dynamic(() => import('../Pages/Landing'), { ssr: false })

export default function Home() {
  return (
    <Layout currentPageName="Landing">
      <Landing />
    </Layout>
  )
} 