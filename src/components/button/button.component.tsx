import { MouseEventHandler } from 'react'
import * as S from './button.styled'

export interface ButtonProps {
  label: string
  onClick?: MouseEventHandler
  type?: 'button' | 'submit'
}

export function Button({
  label,
  onClick = () => {},
  type = 'button'
}: ButtonProps) {
  return (
    <S.Button onClick={onClick} type={type}>
      {label}
    </S.Button>
  )
}
