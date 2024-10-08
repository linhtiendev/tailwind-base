import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'

const saveScrollPos = (asPath: string) => {
  sessionStorage.setItem(
    `scrollPos:${asPath}`,
    JSON.stringify({ x: window.scrollX, y: window.scrollY })
  )
  sessionStorage.setItem('scrollPosCache', `scrollPos:${asPath}`)
}

export const getScrollPos = () => {
  return sessionStorage.getItem('scrollPosCache')
}

const restoreScrollPos = (asPath: string) => {
  const json = sessionStorage.getItem(`scrollPos:${asPath}`)
  const scrollPos = json ? JSON.parse(json) : undefined
  if (scrollPos) {
    window.scrollTo(scrollPos.x, scrollPos.y)
  }
}

export const useScrollRestoration = (router: NextRouter) => {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined
    let shouldScrollRestore = false
    window.history.scrollRestoration = 'manual'
    restoreScrollPos(router.asPath)

    const onBeforeUnload = () => {
      saveScrollPos(router.asPath)
      // delete event.returnValue
      // console.log(event)
    }

    const onRouteChangeStart = () => {
      saveScrollPos(router.asPath)
    }

    const onRouteChangeComplete = (url: string) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false
        /**
         * Calling with relative url, not expected asPath, so this
         * will break if there is a basePath or locale path prefix.
         */
        restoreScrollPos(url)
      }
    }

    window.addEventListener('beforeunload', onBeforeUnload)
    Router.events.on('routeChangeStart', onRouteChangeStart)
    Router.events.on('routeChangeComplete', onRouteChangeComplete)
    Router.beforePopState(() => {
      shouldScrollRestore = true
      return true
    })

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      Router.events.off('routeChangeStart', onRouteChangeStart)
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
      Router.beforePopState(() => true)
    }
  }, [router])
}
