import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { ChangeEventHandler } from 'react'
import * as S from './field.styled'

export interface FieldProps {
  label: string
  name: string
  onChange: ChangeEventHandler
}

export function Field({ label, name }: FieldProps) {
  return (
    <S.Field>
      <Label content={label} fieldName={name} />
      <Input fieldName={name} />
    </S.Field>
  )
}
