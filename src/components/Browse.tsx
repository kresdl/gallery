import React from 'react'
import { useStore } from '../hooks'
import { Flex, Box } from 'rebass'
import { useObserver } from 'mobx-react'
import Photo from './Photo'

const Browse = () => {
  const store = useStore()

  return useObserver(() =>
    <Flex flexWrap="wrap">
      {
        store.images.slice(store.current.offset)
          .map(url =>
            <Box m={10} key={url}>
              <Photo url={url} />
            </Box>
          )
      }
    </Flex>
  )
}

export default Browse