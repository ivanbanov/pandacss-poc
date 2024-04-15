import { styled } from '../styled-system/jsx'

export const Box = styled('div', {
  base: {
    padding: {
      '@mobile': 'small',
      '@tablet': 'medium',
      '@desktop': 'large',
    },
    color: 'none',
  },
  variants: {
    foo: {
      error: { background: 'error' },
      success: { background: 'success' },
      info: { background: 'info' },
    },
    ghost: {
      true: {
        opacity: .5,
      }
    }
  },
  defaultVariants: {
    foo: 'error'
  }
})
