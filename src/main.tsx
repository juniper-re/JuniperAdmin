/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import './index.css'
import { Root } from 'pages/Root'
import { Onboarding } from 'pages/Onboarding'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }, 
  {
    path: '/onboarding',
    element: <Onboarding />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
