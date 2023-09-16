import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from 'app'

import { appStarted } from 'shared/config/init'

import './index.scss'

appStarted()

// Отправляет событие инициализации нативному клиенту

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
