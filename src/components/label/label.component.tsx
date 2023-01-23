import * as S from './label.styled'

export interface LabelProps {
  content: string
  fieldName: string
}

export function Label({ content, fieldName }: LabelProps) {
  return <S.Label htmlFor={fieldName}>{content}</S.Label>
}
