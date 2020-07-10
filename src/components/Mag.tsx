import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Borders = styled(Flex)({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  zIndex: 1
})

const Photo = styled.img({
  maxWidth: '100vw',
  maxHeight: '100vh',
})

const Mag = () => {
  const url = useLocation().pathname

  return (
    <Link to="/">
      <Borders>
        <Photo src={url} alt=""/>
      </Borders>
    </Link>
  )
}

export default Mag