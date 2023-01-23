import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import * as S from './input.styled'

export interface InputProps {
  error?: boolean
  fieldName: string
  onChange: ChangeEventHandler
}

export function Input({ error = false, fieldName, onChange }: InputProps) {
  const [rows, setRows] = useState(1)

  function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target
    const lines = value.split('\n').length
    setRows(lines)
    onChange(event)
  }

  return (
    <S.Input
      error={error}
      id={fieldName}
      name={fieldName}
      onChange={onChangeHandler}
      placeholder="Um craque por linha"
      rows={rows}
    />
  )
}
