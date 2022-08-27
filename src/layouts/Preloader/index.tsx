import Splitting from 'splitting'

import React, { useEffect, useState } from 'react'
import * as S from './Preloader.module.scss'
import { preloader } from '@/animations'

const Preloader = () => {
  const [percent, setPercent] = useState<number>(0)

  useEffect(() => {
    Splitting()
    preloader()
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
