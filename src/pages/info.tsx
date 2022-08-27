import * as React from 'react'

import loadable from '@loadable/component'

const Info = loadable(() => import('@/components/Info'))

const index = () => {
  return <Info />
}

export default index
