import React from 'react'
import { RecordsList } from './RecordsList'
import { RecordForm } from './RecordForm'

export const HomeApp = () => (
  <>
    <h1>Welcome to NonePassword</h1>

    <RecordForm />

    <h2>These are your passwords:</h2>
    <RecordsList />
  </>
)
