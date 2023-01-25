import { MouseEventHandler } from 'react'
import * as S from './button.styled'

export interface ButtonProps {
  disabled?: boolean
  label: string
  onClick?: MouseEventHandler
  type?: 'button' | 'submit'
}

export function Button({
  disabled = true,
  label,
  onClick = () => {},
  type = 'button'
}: ButtonProps) {
  return (
    <S.Button disabled={disabled} onClick={onClick} type={type}>
      {label}
    </S.Button>
  )
}
