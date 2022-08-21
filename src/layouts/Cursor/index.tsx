import React, { useState } from 'react'
import { useMousePosition } from '@/hooks'
import * as styles from './Cursor.module.scss'

import { useRef, useEffect, ReactElement } from 'react'
import gsap from 'gsap/src/all'

const Cursor = (): ReactElement => {
  const { x, y } = useMousePosition()
  const main = useRef(null)

  useEffect(() => {
    gsap.to(main.current, {
      top: y,
      left: x,
      x: '-50%',
      y: '-50%',
      ease: 'none',
      duration: 0.15,
    })
  }, [x, y])

  return <div ref={main} className={styles.cursorStyle} />
}

export default Cursor
