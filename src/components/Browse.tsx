import React from 'react'
import { useStore } from '../hooks'
import { Flex, Box } from 'rebass'
import { useObserver } from 'mobx-react'
import Photo from './Photo'

const Browse = () => {
  const store = useStore()

  return useObserver(() => {
    const { current: { offset }, images, prev } = store

    return (
      <Flex flexWrap="wrap">
        {
          prev.slice(offset)
            .map((prevUrl, i) =>
              <Box m={10} key={prevUrl}>
                <Photo prevUrl={prevUrl} imgUrl={images[i + offset]} />
              </Box>
            )
        }
      </Flex>
    )
  })
}

export default Browse