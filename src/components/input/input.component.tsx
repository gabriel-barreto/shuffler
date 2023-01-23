import { ChangeEvent, useState } from 'react'
import * as S from './input.styled'

export interface InputProps {
  fieldName: string
}

export function Input({ fieldName }: InputProps) {
  const [rows, setRows] = useState(1)

  function onChangeHandler({ target }: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = target
    const lines = value.split('\n').length
    setRows(lines)
  }

  return (
    <S.Input
      id={fieldName}
      name={fieldName}
      onChange={onChangeHandler}
      placeholder="Um craque por linha"
      rows={rows}
    />
  )
}
