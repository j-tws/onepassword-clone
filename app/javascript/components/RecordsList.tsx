import React, { useState, useEffect } from 'react'

export const RecordsList = () => {
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
