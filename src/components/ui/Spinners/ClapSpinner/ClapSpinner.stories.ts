import type { Meta, StoryObj } from '@storybook/react'

import { ClapSpinner } from './index'

const meta: Meta = {
  title: 'Spinner/ClapSpinner',
  component: ClapSpinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ClapSpinner>

export const Primary: Story = {
  args: {
    loading: true,
    size: 25,
  },
}
