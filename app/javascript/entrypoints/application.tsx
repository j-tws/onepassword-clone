import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeApp } from '../components/HomeApp'

const router = createBrowserRouter([
  {
    path: '/home/app',
    element: <HomeApp />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <>
    <RouterProvider router={router} />
  </>,
)
