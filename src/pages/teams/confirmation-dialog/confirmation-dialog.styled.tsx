import { styled } from '@stitches/react'

export const ConfirmationDialog = styled('div', {
  color: '$gray700'
})

export const Description = styled('p', {
  fontSize: '$3',
  lineHeight: '$normal'
})

export const Strong = styled('strong', {
  color: '$gray900',
  fontWeight: '$bold'
})

export const Warning = styled('span', {
  backgroundColor: '$gray200',
  borderRadius: '$sm',
  color: '$slate900',
  display: 'block',
  fontSize: '$2',
  fontWeight: '$semibold',
  margin: '$1 0 $2',
  padding: '$1',
  width: 'fit-content'
})

export const ConfirmButton = styled('button', {
  alignItems: 'center',
  backgroundColor: '$slate800',
  border: '1px solid $slate900',
  borderRadius: '$md',
  boxShadow: '$button',
  color: '$gray100',
  display: 'flex',
  fontSize: '$2',
  fontWeight: '$semibold',
  height: '40px',
  justifyContent: 'center',
  padding: '$1 $2',
  textTransform: 'uppercase',
  transition: 'backgroundColor color borderColor boxShadow 400ms',
  width: 'fit-content',
  willChange: 'contents'
})

export const Buttons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end'
})
