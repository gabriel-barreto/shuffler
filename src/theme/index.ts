import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
  media: {
    xs: '(min-width: 640px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 1024px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1600px)'
  }
})

export { standardTheme } from './standard'
