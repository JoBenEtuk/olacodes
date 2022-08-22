/* eslint-disable quotes */
import { useMediaQuery } from '@/hooks'
import Footer from '@/layouts/Footer'
import * as React from 'react'
import * as S from './Works.module.scss'

const Works = () => {
  const isPhone = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <section className={S.works}>
        <div className={S.works__wrapper}>
          <header className={S.works__header}>
            <h1>
              <span>Selected Works</span>
              <span>
                {!isPhone && (
                  <small>
                    Selecting befitting projects that I’ve worked on, both clients works
                    and my personal projects that speak well of my digital design journey
                  </small>
                )}
                <span>21-22</span>
              </span>
            </h1>
            {isPhone && (
              <small>
                Selecting befitting projects that I’ve worked on, both clients works and
                my personal projects that speak well of my digital design journey
              </small>
            )}
          </header>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Works
