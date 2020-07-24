import React from 'react'
import { useStore } from '../hooks'
import { Box } from 'rebass'
import { observer } from 'mobx-react-lite'
import Prev from './Prev'
import styled from 'styled-components'

const Grid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 256px)',
  justifyContent: 'center',
  gap: 50
})

const Browse = () => {
  const store = useStore()
  const { current: { offset, count }, images, prev, filter } = store
  const [start, length] = filter
    ? [offset, count]
    : [0, prev.length]
  const src = [...Array(length)].map((_, i) =>
    [prev[start + i], images[start + i]])

  return (
    <Grid>
      {
        src.map(([prev, img]) =>
          <Prev prevUrl={prev} imgUrl={img} />
        )
      }
    </Grid>
  )
}

export default observer(Browse)