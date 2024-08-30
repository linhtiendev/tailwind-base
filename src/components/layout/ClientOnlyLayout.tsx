import { useState } from 'react'

import useEffectOnce from 'hooks/common/useEffectOnce'

type ClientOnlyLayoutProps = {
  children: React.ReactElement
}

export const ClientOnlyLayout = ({ children }: ClientOnlyLayoutProps) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffectOnce(() => setMounted(true))

  if (!mounted) return null

  return children
}
