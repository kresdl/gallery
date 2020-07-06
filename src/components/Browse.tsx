import React from 'react'
import { Flex, Box } from 'rebass'
import Photo from './Photo'

const ctx = require.context('../images'),
  keys = ctx.keys(),
  images = keys.map(ctx) as string[]

const Browse = () =>
  <Flex flexWrap="wrap">
    {
      images.map((url, i) =>
        <Box m={10} key={i}>
          <Photo url={url} />
        </Box>
      )
    }
  </Flex>

export default Browse