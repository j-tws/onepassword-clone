import React from 'react'
import ReactDOM from 'react-dom/client'
import { Records } from '../components/Records'

const App = () => (
  <>
    <h1>Hello from React! This should be logged in only</h1>
    <Records />
  </>
)

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(<App />)
