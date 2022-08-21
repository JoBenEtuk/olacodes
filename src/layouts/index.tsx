import { Helmet } from 'react-helmet'
import React, { ReactNode } from 'react'
import Preloader from './Preloader'
// import Header from './Header'
import SEO from '@/components/SEO'
import Cursor from './Cursor'

interface ILayout {
  children: ReactNode
  home?: boolean
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
      </Helmet>
      <main>
        <Preloader />
        {/* <Header /> */}

        <Cursor />
        <SEO />
        <div data-animation='main'>{children}</div>
      </main>
    </>
  )
}

export default Layout
