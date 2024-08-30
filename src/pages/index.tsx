import Layout from 'components/layout/Layout'
import HomePage from 'components/pages/HomePage'
import SEOHead from 'components/seo'

const Home = () => {
  return (
    <>
      <SEOHead title='Trang chủ' />
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default Home
