import { createStitches } from '@stitches/react'

export const { styled } = createStitches({
  utils: {
    test(value: string) {
      return { padding: value }
    }
  }
})

export { standardTheme } from './standard'
