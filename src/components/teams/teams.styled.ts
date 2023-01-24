import { styled } from '@/theme'

export const Teams = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2'
})

export const Team = styled('li', {
  backgroundColor: '$slate800',
  border: '1px solid $gray700',
  borderRadius: '$md',
  boxShadow: '$card',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$2'
})

export const TeamName = styled('h3', {
  color: '$gray200',
  fontSize: '$3',
  lineHeight: '$normal'
})
