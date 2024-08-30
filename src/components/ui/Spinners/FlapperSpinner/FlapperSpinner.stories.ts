import type { Meta, StoryObj } from '@storybook/react'

import FlapperSpinner from './index'

const meta: Meta = {
  title: 'Spinner/FlapperSpinner',
  component: FlapperSpinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FlapperSpinner>

export const Primary: Story = {
  args: {
    loading: true,
    size: 25,
  },
}
