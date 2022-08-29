/* eslint-disable quotes */
import * as React from 'react'
import * as S from './Info.module.scss'

import Footer from '@/layouts/Footer'
import { info } from '@/mocks'

const Info = () => {
  if (!info) {
    return null
  }

  return (
    <>
      <section className={S.info}>
        <div className={S.info__wrapper}>
          <header className={S.info__header}>
            <h1>
              <span>Olanrewaju</span>
              <span>
                <small>Info</small> Olaniyi
              </span>
            </h1>
          </header>

          <div className={S.info__description}>
            <p>
              {info.infoText1}
              <br />
              <br />
              {info.infoText2} <a>{info.companyName}</a>.
            </p>
          </div>

          <div className={S.info__process}>
            <h2>My Process</h2>
            <p>Things I consider when I’m designing</p>

            <div className={S.info__process__items}>
              {info.process.map(({ tag, description }, index) => (
                <div key={tag} className={S.info__process__item}>
                  <span>0{index + 1}</span>
                  <h3>{tag}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Info
