//#region //* Types
import { createEvent, createStore } from 'effector'

export interface SuccessAlertData {
  type: 'success'
  message: string
}

//? Чтобы не было коллизии имён с компонентом Alert из @mui/joy, добавил префикс I
export interface IAlert {
  id: number
  data: SuccessAlertData
}

//#endregion

let alertIncrement = 1

//#region //* Store

const $alerts = createStore<IAlert[]>([])

//#endregion

//#region //* Events

const alertPushed = createEvent<Omit<IAlert, 'id'>>()
const alertClosed = createEvent<number>()

//#endregion

//#region //* Effects

//#endregion

//#region //* Business Logic

$alerts.on(alertPushed, (alerts, alert) => [...alerts, { ...alert, id: ++alertIncrement }])

$alerts.on(alertClosed, (alerts, id) => {
  const index = alerts.findIndex((alert) => alert.id === id)

  if (index === -1) {
    return alerts
  }

  alerts.splice(index, 1)

  return [...alerts]
})

//#endregion

//#region //* Model

export const $$alert = {
  $items: $alerts,

  pushed: alertPushed,
  closed: alertClosed,
}

//#endregion
