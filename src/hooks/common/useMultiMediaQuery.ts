import { useMediaQuery } from './useMediaQuery'

export const useMultiMediaQuery = () => {
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isMd = useMediaQuery('(min-width: 768px)')

  return {
    isLg,
    isMd,
  }
}
