type Days = Record<number, { count: number, offset: number }>
type Months = Record<number, Days>
export type Calender = Record<number, Months>