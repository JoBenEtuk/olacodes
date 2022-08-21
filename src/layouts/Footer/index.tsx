import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as S from './Footer.module.scss'

const Footer = () => {
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
    <section className={S.footer}>
      <div className={S.footer__wrapper}>
        <header className={S.footer__header}>
          <div className={S.footer__header__left}>
            <p>Have an Idea?</p>
            <a href='mailto:hello@olacodes.com'>hello@olacodes.com</a>
            <a href='tel:+2348169945591'>+2348169945591</a>
            <span>©2022</span>
          </div>

          <ul className={S.footer__header__right}>
            {links.map(({ href, title }) => (
              <li key={href}>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </section>
  )
}

export default Footer
