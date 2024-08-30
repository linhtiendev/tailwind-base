import type { Meta, StoryObj } from '@storybook/react'

import ProductCardSkeleton from '.'

const meta: Meta = {
  title: 'Skeleton/ProductCardSkeleton',
  component: ProductCardSkeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductCardSkeleton>

export const Primary: Story = {
  args: {},
}
