import Footer from '@/layouts/Footer'
import * as React from 'react'
import * as S from './Info.module.scss'

const Info = () => {
  return (
    <section className={S.info}>
      <div className={S.info__wrapper}>This works</div>
      <Footer />
    </section>
  )
}

export default Info
