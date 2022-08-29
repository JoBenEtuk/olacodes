import { preloader1 } from '@/animations'
import { info } from '@/mocks'
import * as React from 'react'
import { useEffect, useState } from 'react'
import * as S from './Home.module.scss'

const Home = () => {
  const links: { href: string; title: string }[] = [
    {
      href: `${info.linkedIn}`,
      title: 'LinkedIn',
    },
    {
      href: `${info.dribbble}`,
      title: 'Dribbble',
    },
    {
      href: `${info.instagram}`,
      title: 'Instagram',
    },
  ]

  // PRELOADER
  const [preload, setPreload] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPreload(sessionStorage.getItem('preloader'))
    }
  }, [])

  // Preloader state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onunload = function () {
        sessionStorage.removeItem('preloader')
      }
    }
    const timeout = setTimeout(() => {
      sessionStorage.setItem('preloader', 'true')
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    preload ? preloader1() : null
  }, [preload])

  return (
    <section className={S.home}>
      <div data-animation='home' className={S.home__wrapper}>
        <p>
          {[...info.intro].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <div>
          <h1 data-animation='home__h1'>
            <span>
              <span>I design beautiful and</span>
            </span>
            <span>
              <span>intuitive products</span>
            </span>
          </h1>
          <footer>
            <ul>
              {links.map(({ href, title }, index) => (
                <li key={index}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
            <p>
              Contact me at <a href={`${info.mail}`}>{info.mail}</a>
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Home
