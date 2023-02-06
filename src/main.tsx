import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
