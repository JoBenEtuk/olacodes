import Splitting from 'splitting'

import React, { useEffect, useState } from 'react'
import * as S from './Preloader.module.scss'

const Preloader = () => {
  // PRELOADER
  const [preload, setPreload] = useState<string | null>(null)
  const [percent, setPercent] = useState<number>(0)

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
    Splitting()
  }, [])

  useEffect(() => {
    const timer = () => {
      setPercent(percent + 1)
    }
    if (percent >= 100) {
      return
    }
    const id = setInterval(timer, 30)
    return () => clearInterval(id)
  }, [percent])

  return (
    <div className={S.preloader} data-animation='preloader'>
      <p data-animation='preloader__percent'>
        <span>Loading {percent}%</span>
      </p>
      <div data-splitting='chars'>
        From Lagos, NG{'  '}
        <span>&#x2022;</span>
        {'  '}
        SW 22
      </div>
    </div>
  )
}

export default Preloader
