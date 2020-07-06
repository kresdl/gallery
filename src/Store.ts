import { observable, action, computed } from 'mobx'
import { organize } from './util'
import { Calender } from './types'

const ctx = require.context('./images')
const { assign, keys } = Object

class Store {

  images!: string[]

  calender!: Calender

  @observable
  year!: number

  @observable
  month!: number

  @observable
  day!: number

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

  constructor() {
    const imgKeys = ctx.keys(),
      images = imgKeys.map(ctx) as string[],
      calender = organize(images),

      year = +keys(calender)[0],
      months = calender[year],
      month = +keys(months)[0],
      day = +keys(months[month])[0]

    assign(this, { images, calender, year, month, day })
  }
}

export default Store