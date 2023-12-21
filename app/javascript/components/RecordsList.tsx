import React from 'react'
import { Box } from '@chakra-ui/react'

interface RecordsListProps {
  records: {
    id: number
    title: string
  }[]
}

interface RecordProps {
  title: string
}

const Record = ({ title }: RecordProps) => {
  return (
    <Box
      w="100%"
      m={2}
      p={4}
      border={'1px'}
      borderColor={'gray.200'}
      borderRadius={'md'}
    >
      {title}
    </Box>
  )
}

export const RecordsList = ({ records }: RecordsListProps) => {
  return (
    <>
      <ul>
        {records.map(({ id, title }) => {
          return <Record key={id} title={title} />
        })}
      </ul>
    </>
  )
}
