import { Button } from '@/components/button'
import { Field } from '@/components/field'
import { ChangeEvent, FormEvent, useState } from 'react'
import { z, ZodError } from 'zod'
import * as S from './form.styled'

export interface FormProps {
  onSubmit: (cast: string[]) => void
}

function castTransformer(rawCast: string) {
  const rawMembers = rawCast.split('\n')
  return rawMembers
    .map((rawMember: string) => {
      if (!/^\d/.test(rawMember)) return ''
      return rawMember.replace(/\d|\W/g, '')
    })
    .filter((e: string) => e)
}

const validator = z
  .string()
  .refine((value: string) => castTransformer(value).length > 11, {
    message: 'Você vai precisar encontrar mais craques!'
  })
  .transform(castTransformer)

export function Form({ onSubmit }: FormProps) {
  const [rawCast, setRawCast] = useState('')
  const [error, setError] = useState('')

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault()
    try {
      const members = validator.parse(rawCast)
      onSubmit(members)
    } catch (ex) {
      const error = ex as ZodError
      const [{ message }] = error.issues
      setError(message)
    }
  }

  function onChangeHandler({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setError('')
    const { value } = target
    setRawCast(value)
  }

  return (
    <S.Form method="POST" name="cast-form" onSubmit={onSubmitHandler}>
      <Field
        error={error}
        label="Solta o elenco aqui:"
        name="cast"
        onChange={onChangeHandler}
      />
      <Button label="Sortear" type="submit" />
    </S.Form>
  )
}
