import React, { useState, useEffect } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users/index', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <h2>Greetings! Here are all users in the database</h2>
      <ul>
        {users.map(({ id, email, name }) => {
          return (
            <li key={id}>
              Name: {name}, Email: {email}
            </li>
          )
        })}
      </ul>
    </>
  )
}
