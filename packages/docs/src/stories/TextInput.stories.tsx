import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@wsasouza-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const CustomTag: StoryObj<TextInputProps> = {
  args: {
    children: 'Text Strong',
    as: 'strong',
  },
}
