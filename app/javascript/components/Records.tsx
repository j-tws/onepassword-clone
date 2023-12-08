import React, { useState, useEffect } from 'react'

export const Records = () => {
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

  console.log(records)

  return (
    <>
      <h2>Greetings! Here are all records in the database</h2>
      <ul>
        {records.map(({ id, title }) => {
          return (
            <li key={id}>
              ID: {id}, TITLE: {title}
            </li>
          )
        })}
      </ul>
    </>
  )
}
