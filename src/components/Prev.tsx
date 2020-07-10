import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from 'rebass'
import styled from 'styled-components'

type CustomProps = {
  prevUrl: string,
  imgUrl: string
}

const Borders = styled(Flex)({
  width: 256,
  height: 256,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  borderRadius: 3,
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer'
})

const Photo = styled.img({
  maxWidth: 256,
  maxHeight: 256,
})

const Prev: React.FC<CustomProps> = ({ prevUrl, imgUrl }) =>
  <Link to={imgUrl}>
    <Borders>
      <Photo src={prevUrl} alt="" />
    </Borders>
  </Link>

export default Prev