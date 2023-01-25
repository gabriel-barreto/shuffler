import { Button } from '@/components/button'
import { Field } from '@/components/field'
import { castValidator } from '@/validators'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ZodError } from 'zod'
import * as S from './form.styled'

export interface FormProps {
  onSubmit: (cast: string[]) => void
}

export function Form({ onSubmit }: FormProps) {
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)
  const [rawCast, setRawCast] = useState('')
  const [error, setError] = useState('')

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault()
    try {
      const members = castValidator.parse(rawCast)
      onSubmit(members)
    } catch (ex) {
      const error = ex as ZodError
      const [{ message }] = error.issues
      setError(message)
    } finally {
      setSubmitButtonDisabled(true)
    }
  }

  function onChangeHandler({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setSubmitButtonDisabled(false)
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
      <Button disabled={isSubmitButtonDisabled} label="Sortear" type="submit" />
    </S.Form>
  )
}
