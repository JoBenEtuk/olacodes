import * as React from 'react'
import Splitting from 'splitting'
import { useEffect } from 'react'

import * as S from './Home.module.scss'

const Home = () => {
  const links: { href: string; title: string }[] = [
    {
      href: '/LinkedIn',
      title: 'LinkedIn',
    },
    {
      href: '/Dribbble',
      title: 'Dribbble',
    },
    {
      href: '/Instagram',
      title: 'Instagram',
    },
  ]

  useEffect(() => {
    Splitting()
  }, [])

  return (
    <section className={S.home}>
      <div data-animation='home' className={S.home__wrapper}>
        <p data-splitting='words'>
          Olacodes is a user interface designer working with agencies and startups
          worldwide to tackle complex projects. Having collaborated with clients, Olacodes
          knows what it’s like to create, design and develop complex user interfaces.
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
              {links.map(({ href, title }) => (
                <li key={href}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
            <p>
              Contact me at{' '}
              <a href='mailto:info@thesolecompany.com'>info@thesolecompany.com</a>
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Home
