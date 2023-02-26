import { styled } from '@stitches/react'

export const Container = styled('section', {
  alignItems: 'center',
  bottom: '16px',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'fixed',
  right: '24px'
})

export const Button = styled('button', {
  alignItems: 'center',
  backgroundColor: '$indigo500',
  border: '1px solid $indigo500',
  borderRadius: '$full',
  boxShadow: '$button',
  display: 'flex',
  height: '$hClickable',
  justifyContent: 'center',
  transition: 'backgroundColor color borderColor boxShadow 400ms',
  width: '$hClickable',
  '&:disabled': {
    backgroundColor: '$indigo900',
    border: '1px solid $indigo600',
    boxShadow: 'none',
    color: '$indigo500',
    cursor: 'not-allowed'
  },
  '& > img': {
    height: '$fabIcon',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '$fabIcon'
  }
})
