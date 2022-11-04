import { styled } from './styles'

export type ButtonProps = {
  size: 'small' | 'big'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite700',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$gray100',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
