import { styled } from '@/theme'

export const Input = styled('textarea', {
  alignItems: 'center',
  backgroundColor: '$gray700',
  border: '1px solid $gray500',
  borderRadius: '$md',
  boxShadow: '$input',
  color: '$gray100',
  display: 'flex',
  fontSize: '$4',
  height: 'fit-content',
  lineHeight: '$relaxed',
  minHeight: '$hClickable',
  outline: 'none',
  padding: '$1',
  resize: 'none',
  whiteSpace: 'pre',
  width: '100%',
  '&::placeholder': {
    color: '$gray300'
  },
  variants: {
    error: {
      true: {
        backgroundColor: '$gray800',
        borderColor: '$indigo500',
        color: '$indigo500',
        '&::placeholder': {
          color: '$indigo400'
        }
      }
    }
  }
})
