import { styled } from '@/theme'

export const Chunk = styled('article', {
  backgroundColor: '$slate800',
  border: '1px solid $slate700',
  borderRadius: '$md',
  boxShadow: '$card',
  color: '$gray100',
  padding: '$2'
})

export const Members = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1'
})

export const Member = styled('li', {
  alignItems: 'center',
  display: 'flex',
  gap: '$2'
})

export const MemberNumber = styled('span', {
  color: '$gray500',
  fontSize: '$2'
})

export const MemberName = styled('p', {
  fontSize: '$4',
  fontWeight: 'semibold',
  lineHeight: '$normal'
})
