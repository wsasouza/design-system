import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@wsasouza-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/wsasouza.png',
    alt: 'Walter Santos de Andrade Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
