import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Image } from 'rebass'

interface Props {
  prevUrl: string,
  imgUrl: string
}

const Photo = ({ prevUrl, imgUrl }: Props) =>
  <Link to={imgUrl}>
    <Flex sx={{
      width: 256,
      height: 256,
      justifyContent: 'center',
      alignItems: 'center',
      bg: 'black',
      borderRadius: 3,
      boxShadow: '0 3px 5px rgba(0, 0, 0, 0.5), 0 3px 2px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer'
    }}
    >
      <Image src={prevUrl} sx={{
        maxWidth: 256,
        maxHeight: 256,
        alt: ''
      }}
      />
    </Flex>
  </Link>

export default Photo