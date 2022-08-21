import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as S from './Header.module.scss'

const Preloader = () => {
  const [time, setTime] = useState<string>('00:00')
  const links = ['info', 'works']
  setInterval(() => {
    const date = new Date()
    const time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    })
    setTime(time)
  }, 1000)

  return (
    <header className={S.header}>
      <p>
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
      <p className={S.header__time}>{time}</p>
      <nav>
        {links.map(link => (
          <Link key={link} to={`/${link}`}>
            {link}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Preloader
