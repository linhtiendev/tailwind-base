// hooks/useOrientation.ts
import { useEffect, useState } from 'react'

type Orientation = 'portrait' | 'landscape' | undefined

export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>(undefined)

  const handleOrientationChange = () => {
    const mqPortrait = window.matchMedia('(orientation: portrait)')
    const mqLandscape = window.matchMedia('(orientation: landscape)')

    if (mqPortrait.matches) {
      setOrientation('portrait')
    } else if (mqLandscape.matches) {
      setOrientation('landscape')
    } else {
      setOrientation(undefined)
    }
  }

  useEffect(() => {
    handleOrientationChange()
    window.addEventListener('resize', handleOrientationChange)
    return () => {
      window.removeEventListener('resize', handleOrientationChange)
    }
  }, [])

  return orientation
}
