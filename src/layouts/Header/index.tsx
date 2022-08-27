import { useMediaQuery } from '@/hooks'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as S from './Header.module.scss'

const Header = () => {
  const isPhone = useMediaQuery('(max-width: 481px)')
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
      <p className={S.header__p}>
        <Link to='/'>OLACODES</Link>
        {!isPhone && (
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
        )}
        {isPhone && <small>{time}</small>}
      </p>
      {!isPhone && <p className={S.header__time}>{time}</p>}
      <nav>
        {links.map(link => (
          <Link activeClassName={S.active} key={link} to={`/${link}`}>
            {link}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
