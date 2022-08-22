import Info from '@/components/Info'
import * as React from 'react'

const index = () => {
  if (typeof document !== 'undefined') {
    return <Info />
  }
}

export default index
