import moment from 'moment'
import 'moment/min/locales.min'

import dateUpdateLocaleRu from './date-update-locale-ru'
import { DifferenceBy, OurDate } from './types'

moment.updateLocale('ru', dateUpdateLocaleRu)
moment.locale('ru')

const datesDifference = (endDate: OurDate, startDate: OurDate, by: DifferenceBy = 'days') => {
  const date = moment(startDate)
  return date.diff(endDate, by)
}

const rangeOfDates = (start: OurDate, end?: OurDate) => {
  const startDate = moment(start).format('DD.MM.YYYY')
  const endDate = moment(end).format('DD.MM.YYYY')

  return `${startDate} — ${endDate}`
}

export { moment as ourMoment }
export { datesDifference, rangeOfDates }
