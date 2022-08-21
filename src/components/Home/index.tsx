import * as React from 'react'
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
  return (
    <section className={S.home}>
      <div className={S.home__wrapper}>
        <p>
          Olacodes is a user interface designer working with agencies and startups
          worldwide to tackle complex projects. Having collaborated with clients, Olacodes
          knows what it’s like to create, design and develop complex user interfaces.
        </p>
        <div>
          <h1>I design beautiful and intuitive products</h1>
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
