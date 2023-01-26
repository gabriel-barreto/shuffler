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

export const Wrapper = styled('div', {
  maxWidth: '$maxWidth',
  width: '100%'
})

export const Spacer = styled('span', {
  display: 'block',
  height: '16px'
})
