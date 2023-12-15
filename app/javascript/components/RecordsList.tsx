import React from 'react'

interface Record {
  id: number
  title: string
}

interface RecordsListProps {
  records: Record[]
}

export const RecordsList = ({ records }: RecordsListProps) => {
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
