import Image from 'next/image'
import { useRouter } from 'next/router'

import Image404 from 'assets/images/page_404.svg'
import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import PrimaryButton from 'components/ui/Button/PrimaryButton'

const Custom404Page = () => {
  const router = useRouter()

  return (
    <Layout>
      <SEOHead title='404 Not Found' />
      <section className='flex flex-col items-center justify-center py-20'>
        <Image src={Image404} alt='404' width={500} height={350} className='h-auto w-80' />
        <PrimaryButton
          className='mt-10'
          text='Trở về trang chủ'
          onClick={() => router.replace('/')}
        />
      </section>
    </Layout>
  )
}

export default Custom404Page
