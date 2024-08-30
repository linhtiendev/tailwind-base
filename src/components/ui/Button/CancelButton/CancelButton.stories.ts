import type { Meta, StoryObj } from '@storybook/react'

import CancelButton from '.'

const meta: Meta = {
  title: 'Button/CancelButton',
  component: CancelButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CancelButton>

export const Primary: Story = {
  args: {
    text: 'Button Cancel',
    active: false,
  },
}
