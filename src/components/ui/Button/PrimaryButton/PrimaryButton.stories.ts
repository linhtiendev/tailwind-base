import type { Meta, StoryObj } from '@storybook/react'

import PrimaryButton from '.'

const meta: Meta = {
  title: 'Button/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PrimaryButton>

export const Primary: Story = {
  args: {
    text: 'Button Primary',
  },
}
