import React from 'react'
import { Box } from '@chakra-ui/react'

export const Nav = () => {
  return (
    <>
      <Box bg="grey" w="100%" p={4} color="white">
        <a href={'/home/app'}>Home</a> |{' '}
        <a href={'/records/new'}>New Password</a>
      </Box>
    </>
  )
}
