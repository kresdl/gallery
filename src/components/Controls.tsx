import React from 'react'
import { Flex } from 'rebass'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks'
import Select from './Select'
import Toggle from './Toggle'

const { keys } = Object

const Controls = () => {
  const store = useStore(),
    { calender, year, month, day, filter, setYear, setMonth, setDay, setFilter } = store,
    years = keys(calender),
    months = keys(calender[year]),
    days = keys(calender[year][month])

  return (
    <Flex py={3} justifyContent="center" alignItems="center">
      <Toggle active={filter} onChange={setFilter}>Filter</Toggle>
      <Select def={year} items={years} onChange={setYear} disabled={!filter}/>
      <Select def={month} items={months} onChange={setMonth} disabled={!filter}/>
      <Select def={day} items={days} onChange={setDay} disabled={!filter}/>
    </Flex>
  )
}

export default observer(Controls)