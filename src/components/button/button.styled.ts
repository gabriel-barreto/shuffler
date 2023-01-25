import { styled } from '@/theme'

export const Button = styled('button', {
  alignItems: 'center',
  backgroundColor: '$indigo500',
  border: '1px solid $indigo500',
  borderRadius: '$md',
  boxShadow: '$button',
  color: '$gray100',
  display: 'flex',
  fontSize: '$2',
  fontWeight: '$semibold',
  height: '$hClickable',
  justifyContent: 'center',
  padding: '$2',
  textTransform: 'uppercase',
  transition: 'backgroundColor color borderColor boxShadow 400ms',
  width: '100%',
  willChange: 'contents',
  '&:disabled': {
    backgroundColor: '$indigo900',
    border: '1px solid $indigo600',
    boxShadow: 'none',
    color: '$indigo500',
    cursor: 'not-allowed'
  }
})
