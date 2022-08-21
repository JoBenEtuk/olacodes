import React, { useEffect, useState } from 'react'
import * as S from './Preloader.module.scss'

const Preloader = () => {
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

  return (
    <div className={S.preloader}>
      <p>Loading 10%</p>
      <p>
        From Lagos, NG
        <svg
          width='6'
          height='7'
          viewBox='0 0 6 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='3' cy='3.5' r='3' fill='black' />
        </svg>
        SW 22
      </p>
    </div>
  )
}

export default Preloader
