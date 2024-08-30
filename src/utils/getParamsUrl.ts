'use client'

import { useSearchParams } from 'next/navigation'

export default function useGetParams(key: any) {
  const searchParams = useSearchParams()

  const param = searchParams.get(key) ?? '1' // default value is "1"

  return param
}
