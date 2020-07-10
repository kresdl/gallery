import React from 'react'
import { useStore } from '../hooks'
import { Flex, Box } from 'rebass'
import { observer } from 'mobx-react-lite'
import Prev from './Prev'

const Browse = () => {
  const store = useStore()
  const { current: { offset, count }, images, prev, filter } = store
  const [start, length] = filter
    ? [offset, count]
    : [0, prev.length]
  const src = [...Array(length)].map((_, i) =>
    [prev[start + i], images[start + i]])

  return (
    <Flex flexWrap="wrap">
      {
        src.map(([prev, img]) =>
          <Box m={10} key={prev}>
            <Prev prevUrl={prev} imgUrl={img} />
          </Box>
        )
      }
    </Flex>
  )
}

export default observer(Browse)