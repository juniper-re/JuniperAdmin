/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import './index.css'
import 'styles/fonts'
import { Root } from 'pages/Root'
import { Layout } from 'antd'
import { Drawer } from 'components/nav/Drawer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout style={{ height: '100vh' }}>
      <Drawer />
      <Layout style={{ overflowY: 'auto' }}>
        <RouterProvider router={router} />
      </Layout>
    </Layout>
  </React.StrictMode>
)
