import { styled } from '@/theme'

export const App = styled('main', {
  backgroundColor: '$gray900',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '$2',
  '@sm': {
    alignItems: 'center',
    padding: '$4'
  }
})
