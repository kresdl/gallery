import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Image } from 'rebass'

interface Props {
  url: string
}

const Photo = ({ url }: Props) => {
  return (
    <Link to={url}>
      <Flex sx={{
        width: 256,
        height: 256,
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'black',
        borderRadius: 3,
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer'
      }}
      >
        <Image src={url} sx={{
          maxWidth: 256,
          maxHeight: 256,
          alt: ''
        }}
        />
      </Flex>
    </Link>
  )
}

export default Photo