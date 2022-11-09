import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@wsasouza-ui/react'

export default {
  title: 'Tipography/Heading',
  component: Heading,

  args: {
    children: 'Título para exemplo',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Texto de exemplo para h1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
