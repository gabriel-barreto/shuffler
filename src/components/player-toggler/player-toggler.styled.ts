import { styled } from '@/theme'

export const PlayerToggler = styled('button', {
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  gap: '8px',
  height: '$hClickable'
})

export const Toggler = styled('div', {
  height: '$hClickable',
  position: 'relative',
  width: '6.4rem',
  '&::after, &::before': {
    backgroundColor: '$gray100',
    content: '',
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'background-color 400ms, transform 400ms',
    willChange: 'background-color transform'
  },
  '&::after': {
    borderRadius: '$full',
    height: '2.4rem',
    width: '2.4rem'
  },
  '&::before': {
    borderRadius: '$lg',
    opacity: '0.24',
    height: '1.6rem',
    width: '4.8rem'
  },
  variants: {
    isEnabled: {
      true: {
        '&::after, &::before': { backgroundColor: '$green500' },
        '&::after': { transform: 'translate(100%, -50%)' }
      }
    }
  }
})

export const Label = styled('label', {
  color: '$gray100',
  fontSize: '$4'
})
