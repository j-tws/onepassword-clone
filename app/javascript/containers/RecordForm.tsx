import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading, Container, Input, Box, Button } from '@chakra-ui/react'

export const RecordForm = () => {
  const [title, setTitle] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsFetching(true)

    const payload = {
      record: { title },
    }

    const token = (
      document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement
    ).content

    fetch('http://localhost:3000/api/records', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          setIsFetching(false)
          navigate('/home/app')
        } else {
          setIsFetching(false)
          console.error('Error creating record:', response)
        }
      })
      .catch((errors) => {
        setIsFetching(false)
        console.error(errors)
      })
  }

  const handleChange = (e: React.SyntheticEvent) => {
    setTitle((e.target as HTMLInputElement).value)
  }

  return (
    <Container pt={5}>
      <Heading as="h1">Create new password</Heading>
      <form onSubmit={handleSubmit}>
        <Box mt={3}>
          <label>Title:</label>
          <Input
            mt={2}
            placeholder="Enter title here"
            size="md"
            onChange={handleChange}
          />
        </Box>
        <Button mt={2} colorScheme="teal" isLoading={isFetching} type="submit">
          Create Record
        </Button>
      </form>
    </Container>
  )
}
