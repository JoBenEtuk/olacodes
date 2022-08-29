import { useMediaQuery } from '@/hooks'
import { info } from '@/mocks'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as S from './Footer.module.scss'

const Footer = () => {
  const isPhone = useMediaQuery('(max-width: 481px)')
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
      href: `${info.arena}`,
      title: 'Are.na',
    },
    {
      href: `${info.instagram}`,
      title: 'Instagram',
    },
  ]

  const [time, setTime] = useState<string>('00:00')
  const navLinks = ['info', 'works']
  setInterval(() => {
    const date = new Date()
    const time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    })
    setTime(time)
  }, 1000)

  if (!info) {
    return null
  }
  return (
    <section className={S.footer}>
      {isPhone && (
        <header className={S.header}>
          <p className={S.header__p}>
            <span>
              Lagos, NG
              <svg
                width='6'
                height='7'
                viewBox='0 0 6 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <circle cx='3' cy='3.5' r='3' fill='black' />
              </svg>
              SW 22
            </span>
            <small>{time}</small>
          </p>
          <nav>
            {navLinks.map(link => (
              <Link key={link} to={`/${link}`}>
                {link}
              </Link>
            ))}
          </nav>
        </header>
      )}

      <header className={S.footer__header}>
        <div className={S.footer__header__left}>
          <p>Have an Idea?</p>
          <a href={`${info.mail}`}>{info.mail}</a>
          <a href={`${info.phone}`}>{info.phone}</a>
          <span>©2022</span>
        </div>

        <ul className={S.footer__header__right}>
          {links.map(({ href, title }, index) => (
            <li key={index}>
              <a href={href}>
                {title}
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.456 3.16165L1.35906 3.16165L1.35908 0.500023L16 0.5L16 15.1409L13.3384 15.1409L13.3384 5.044L1.88235 16.5L0 14.6176L11.456 3.16165Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </header>
      <h1>
        <span>
          <span>Let&apos;s work on</span>
        </span>
        <span>
          <span>something together</span>
        </span>
      </h1>
      {/* </div> */}
    </section>
  )
}

export default Footer
