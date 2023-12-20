import React, { useState, useEffect } from 'react'
import { RecordsList } from '../components/RecordsList'
import { Link } from 'react-router-dom'

export const HomeApp = () => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/records/index', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <h1>Welcome to NonePassword</h1>
      <h2>These are your passwords:</h2>
      <RecordsList records={records} />
    </>
  )
}
