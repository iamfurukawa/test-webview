import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes';

import './assets/fonts/GraphikRegular.otf'

import './styles.scss'

declare global {
  interface Window {
    messageHandler?: any;
    backToFlutter?: any;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router />
)
