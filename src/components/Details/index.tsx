import Footer from '@/layouts/Footer'
import { works } from '@/mocks'
import * as React from 'react'
import * as S from './Details.module.scss'

const Works = () => {
  console.log(works)

  return (
    <>
      <section className={S.details}>
        <div className={S.details__wrapper}>omo mehn</div>
      </section>
      <Footer />
    </>
  )
}

export default Works
