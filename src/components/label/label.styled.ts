import { styled } from '@/theme'

export const Label = styled('label', {
  color: '$gray200',
  fontSize: '$4',
  width: '100%',
  variants: {
    error: {
      true: {
        color: '$indigo500'
      }
    }
  }
})
