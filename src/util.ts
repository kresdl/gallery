import { Calender } from './types'

const dates = (imgs: string[]) =>
  imgs.map(img => {
    const match = img.match(/(\d+)-(\d+)-(\d+)/)
    if (match && match.length === 4) {
      return match.slice(1).map(e => +e)
    }
    throw Error(`Invalid filename format on file ${img}, could not extract date`)
  })

const organize = (images: string[]) =>
  dates(images)
    .reduce((cal: Calender, [y, m, d], i) => {
      cal[y] = cal[y] ?? {}
      cal[y][m] = cal[y][m] ?? {}
      const t = cal[y][m][d]
      cal[y][m][d] = t
        ? { ...t, count: t.count + 1 }
        : { offset: i, count: 1 }
      return cal;
    }, {})

export { organize };
