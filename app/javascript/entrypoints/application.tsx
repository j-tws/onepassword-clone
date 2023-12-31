import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeApp } from '../containers/HomeApp'
import { Nav } from '../components/Nav'
import { RecordForm } from '../containers/RecordForm'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/home/app',
    element: <HomeApp />,
  },
  {
    path: '/records/new',
    element: <RecordForm />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <>
    <ChakraProvider>
      <Nav />
      <RouterProvider router={router} />
    </ChakraProvider>
  </>,
)
