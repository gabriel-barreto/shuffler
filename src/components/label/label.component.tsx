import * as S from './label.styled'

export interface LabelProps {
  content: string
  error?: boolean
  fieldName: string
}

export function Label({ content, error = false, fieldName }: LabelProps) {
  return (
    <S.Label error={error} htmlFor={fieldName}>
      {content}
    </S.Label>
  )
}
