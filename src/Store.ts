import { observable, action, computed } from 'mobx'
import { organize } from './util'
import { Calender } from './types'

const imgCtx = require.context('./images')
const prevCtx = require.context('./prev')

const { assign, keys } = Object

class Store {

  images!: string[]
  prev!: string[]

  calender!: Calender

  @observable
  year!: number

  @observable
  month!: number

  @observable
  day!: number

  @observable
  filter: boolean = false

  @computed
  get current() {
    return this.calender[this.year][this.month][this.day]
  }

  @action
  setYear = (year: number) => {
    const months = this.calender[year]
    this.year = year
    this.month = +keys(months)[0]
    this.day = +keys(months[this.month])[0]
  }

  @action
  setMonth = (month: number) => {
    this.month = month
    this.day = +keys(this.calender[this.year][month])[0]
  }

  @action
  setDay = (day: number) => {
    this.day = day
  }

  @action
  setFilter = (state: boolean) => {
    this.filter = state
  }

  constructor() {
    const imgKeys = imgCtx.keys(),
      images = imgKeys.map(imgCtx) as string[],

      prevKeys = prevCtx.keys(),
      prev = prevKeys.map(prevCtx) as string[],

      calender = organize(images),

      year = +keys(calender)[0],
      months = calender[year],
      month = +keys(months)[0],
      day = +keys(months[month])[0]

    assign(this, { images, prev, calender, year, month, day })
  }
}

export default Store