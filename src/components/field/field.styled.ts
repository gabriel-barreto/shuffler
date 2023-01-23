import { styled } from '@/theme'

export const Field = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  justifyContent: 'center',
  width: '100%'
})

export const Error = styled('p', {
  color: '$indigo500',
  fontSize: '$3'
})
