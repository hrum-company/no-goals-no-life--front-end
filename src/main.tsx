import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from 'app'

import { appStarted } from 'shared/config/init'

import './index.scss'

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
