import React from 'react'
import ReactDOM from 'react-dom/client'
import { Users } from '../components/Users'

const App = () => {
  return (
    <>
      <h1>Hello from React!</h1>
      <Users />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
