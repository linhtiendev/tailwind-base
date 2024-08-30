import React from 'react'

const useScroll = () => {
  const elRef: any = React.createRef()
  const executeScroll = () => {
    if (elRef?.current?.offsetTop) {
      /*  eslint no-unsafe-optional-chaining: "error" */
      const scrollY = elRef?.current?.offsetTop - 115
      window.scrollTo(0, scrollY ?? 0)
    }
  }

  return [executeScroll, elRef]
}
export default useScroll
