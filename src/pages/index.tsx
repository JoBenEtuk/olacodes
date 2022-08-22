import * as React from 'react'
import loadable from '@loadable/component'

const Home = loadable(() => import('@/components/Home'))

const index = (): JSX.Element => {
  return <Home />
}

export default index
