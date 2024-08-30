import React from 'react'

import Footer from './Footer'
import Header from './Header'

const LayoutWithMaxBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section className='mx-auto max-w-screen-ultra'>{children}</section>
      <Footer />
    </>
  )
}

export default LayoutWithMaxBody
