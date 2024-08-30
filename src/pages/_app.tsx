import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
// handle more advanced cases than URLSearchParams supports.
import queryString from 'query-string'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryParamProvider } from 'use-query-params'

import NextAdapterPages from 'components/layout/NextAdapterPages'
import { ProtectedLayout } from 'components/layout/ProtectedLayout'
import NextProgress from 'components/ui/Progress/NextProgress'
import { wrapper } from 'redux/store'
import 'styles/index.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
})

type AppPropsWithAuth = AppProps<{ session: Session }> & {
  Component: {
    requireAuth?: boolean
  }
}

const App = ({ Component, pageProps: { session, ...otherProps } }: AppPropsWithAuth) => {
  if (process.env.NODE_ENV === 'production') {
    // Polyfill để tắt console.log trong production
    console.log = function () {}
  }
  const { store: storeWrapper, props: pageProps } = wrapper.useWrappedStore(otherProps)
  return (
    <ReduxProvider store={storeWrapper}>
      <QueryParamProvider
        adapter={NextAdapterPages}
        options={{
          searchStringToObject: queryString.parse,
          objectToSearchString: queryString.stringify,
        }}
      >
        <ConfigProvider>
          <SessionProvider session={session}>
            {Component.requireAuth ? (
              <ProtectedLayout>
                <main className={`${roboto.variable} flex min-h-screen flex-col font-roboto`}>
                  <NextProgress />
                  <Component {...pageProps} />
                </main>
              </ProtectedLayout>
            ) : (
              <main className={`${roboto.variable} flex min-h-screen flex-col font-roboto`}>
                <NextProgress />
                <Component {...pageProps} />
              </main>
            )}
          </SessionProvider>
        </ConfigProvider>
      </QueryParamProvider>
    </ReduxProvider>
  )
}

export default App
