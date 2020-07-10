import React from 'react'
import styled from 'styled-components'
import Sel from 'react-select'

type CustomProps = {
  items: string[],
  def: number,
  onChange: (item: number) => void,
  disabled?: boolean
}

const StyledSel = styled(Sel)({
  width: 110,
  marginLeft: 5,
  display: 'inline-block'
})

const Select: React.FC<CustomProps> = ({ items, def, onChange, disabled = false }) => {
  const options = items.map(item => ({ 
    value: +item, 
    label: item 
  }))
  
  const value = { 
    value: def, 
    label: def.toString() 
  }

  return (
    <StyledSel multi={false} onChange={(opt: any) => onChange(opt?.value)} 
      isDisabled={disabled} value={value} options={options} />
  )
}

export default Select