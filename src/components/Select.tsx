import React from 'react'
import { Select as Sel } from '@rebass/forms'

interface Props {
  items: string[],
  def: number,
  onChange: (item: number) => void
}

type Evt = React.ChangeEvent<HTMLSelectElement>

const Select = ({ items, def, onChange }: Props) => {
  const change = (evt: Evt) => onChange(+evt.target.value)

  return (
    <Sel onChange={change} sx={{
      defaultValue: def,
      display: 'inline-block',
      width: '8ch',
      ml: 3
    }}
    >
      {
        items.map(item =>
          <option value={item} key={item}>{item}</option>
        )
      }
    </Sel>
  )
}

export default Select