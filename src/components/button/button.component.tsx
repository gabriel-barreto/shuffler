import { MouseEventHandler } from 'react'
import * as S from './button.styled'

export interface ButtonProps {
  label: string
  onClick: MouseEventHandler
}

export function Button({ label, onClick }: ButtonProps) {
  return <S.Button onClick={onClick}>{label}</S.Button>
}
