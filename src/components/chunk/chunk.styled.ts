import { styled } from '@/theme'

export const Chunk = styled('article', {
  backgroundColor: '$slate900',
  color: '$gray100',
  borderRadius: '$2',
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
