import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@wsasouza-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,

  args: {
    children: 'Texto de exemplo.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text Strong',
    as: 'strong',
  },
}
