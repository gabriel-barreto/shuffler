import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { ChangeEventHandler } from 'react'
import * as S from './field.styled'

export interface FieldProps {
  error?: string
  label: string
  name: string
  onChange: ChangeEventHandler
}

export function Field({ error = '', label, name, onChange }: FieldProps) {
  const hasError = error !== ''
  return (
    <S.Field>
      <Label content={label} error={hasError} fieldName={name} />
      <Input error={hasError} fieldName={name} onChange={onChange} />
      {hasError && <S.Error>{error}</S.Error>}
    </S.Field>
  )
}
