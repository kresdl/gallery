import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from 'rebass'
import styled from 'styled-components'

type CustomProps = {
  onChange: (state: boolean) => void,
  active: boolean
}

const Wrapper = styled(Box)({
  marginRight: 10,
  padding: '6px 10px',
  borderRadius: 3,
  border: '1px solid black',
  cursor: 'pointer',
  '-webkit-user-select': 'none',
  'user-select': 'none'
})

const Toggle: React.FC<CustomProps> = ({ onChange, active, children }) =>
  <Wrapper onClick={() => onChange(!active)} sx={{
    bg: active ? '#adf' : 'transparent'
  }}
  >
    {children}
  </Wrapper>

export default observer(Toggle)