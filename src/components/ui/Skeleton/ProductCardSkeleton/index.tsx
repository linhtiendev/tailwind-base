import { Skeleton } from 'antd'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { ClientOnlyLayout } from 'components/layout/ClientOnlyLayout'

type ProductCardSkeletonProps = {
  className?: string
}

const ProductCardSkeleton = ({ className }: ProductCardSkeletonProps) => (
  <ClientOnlyLayout>
    <div
      className={twMerge(
        'h-80 w-52 rounded-lg border border-gray-200 bg-white shadow transition-all',
        className
      )}
    >
      <Skeleton.Image className='h-40 w-full rounded-t-lg' active />
      <Skeleton className='mt-2 p-3' active />
    </div>
  </ClientOnlyLayout>
)

export default ProductCardSkeleton
