import type { Meta, StoryObj } from '@storybook/react'

import OutlineButton from '.'

const meta: Meta = {
  title: 'Button/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OutlineButton>

export const Primary: Story = {
  args: {
    text: 'Button Outline',
  },
}
