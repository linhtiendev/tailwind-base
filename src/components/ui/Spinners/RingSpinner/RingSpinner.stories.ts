import type { Meta, StoryObj } from '@storybook/react'

import RingSpinner from './index'

const meta: Meta = {
  title: 'Spinner/RingSpinner',
  component: RingSpinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RingSpinner>

export const Primary: Story = {
  args: {
    loading: true,
    size: 30,
  },
}
