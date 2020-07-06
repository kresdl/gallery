import React from 'react'
import { Flex } from 'rebass'
import { useObserver } from 'mobx-react'
import { useStore } from '../hooks'
import Select from './Select'

const { keys } = Object

const Controls = () => {
  const store = useStore()

  return useObserver(() => {
    const { calender, year, month, day, setYear, setMonth, setDay } = store,
      years = keys(calender),
      months = keys(calender[year]),
      days = keys(calender[year][month])

    return (
      <Flex py={3} justifyContent="center">
        <Select def={year} items={years} onChange={setYear} />
        <Select def={month} items={months} onChange={setMonth} />
        <Select def={day} items={days} onChange={setDay} />
      </Flex>
    )
  })
}

export default Controls