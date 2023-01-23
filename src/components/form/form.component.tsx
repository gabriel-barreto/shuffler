import { Button } from '@/components/button'
import { Field } from '@/components/field'
import { FormEvent } from 'react'
import * as S from './form.styled'

export interface FormProps {
  field: {
    label: string
    name: string
  }
  name: string
}

export function Form({ field, name }: FormProps) {
  function onSubmitHandler(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <S.Form method="POST" name={name} onSubmit={onSubmitHandler}>
      <Field label={field.label} name={field.name} onChange={() => {}} />
      <Button label="Sortear" type="submit" />
    </S.Form>
  )
}
