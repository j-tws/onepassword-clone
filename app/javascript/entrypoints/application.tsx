import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => <h1>Hello from React! This should be logged in only</h1>

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(<App />)
