import React from 'react'
import { useHistory } from 'react-router-dom'
import { Flex, Image } from 'rebass'

const Mag = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const exit = () => {
    history.push('/')
  }

  return (
    <Flex onClick={exit} sx={{
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
  )
}

export default Mag