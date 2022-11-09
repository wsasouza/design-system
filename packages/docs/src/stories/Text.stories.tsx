import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@wsasouza-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,

  args: {
    children: 'Texto de exemplo.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text Strong',
    as: 'strong',
  },
}
