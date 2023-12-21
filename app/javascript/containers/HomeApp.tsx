import React, { useState, useEffect } from 'react'
import { RecordsList } from '../components/RecordsList'
import { Heading, Text, Container } from '@chakra-ui/react'

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
      <Container p={5}>
        <Heading as="h1">Welcome to NonePassword</Heading>
        <Text fontSize="lg">These are your passwords:</Text>
        <RecordsList records={records} />
      </Container>
    </>
  )
}
