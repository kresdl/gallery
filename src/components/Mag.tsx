import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flex, Image } from 'rebass'

const Mag = () => {
  const url = useLocation().pathname;

  return (
    <Link to="/">

      <Flex sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'black'
      }}
      >
        <Image src={url} sx={{
          maxWidth: '100vw',
          maxHeight: '100vh',
          alt: ''
        }}
        />

      </Flex>
    </Link>
  )
}

export default Mag