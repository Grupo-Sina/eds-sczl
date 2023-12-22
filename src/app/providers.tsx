'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AppContextProvider } from './context/AppContext'
import { AuthContextProvider } from './context/AuthContext'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { APP_PUBLIC_ROUTES } from './routes/public-routes'
const PublicRoute = dynamic(() => import('./routes/public-router'), {
  ssr: false,
})
const PrivateRoute = dynamic(() => import('./routes/private-router'), {
  ssr: false,
})
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <NextUIProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            transition={Slide}
            theme={'colored'}
          />
          {pathname && (
            <>
              {APP_PUBLIC_ROUTES.includes(pathname) ? (
                <PublicRoute>{children}</PublicRoute>
              ) : (
                <PrivateRoute>{children}</PrivateRoute>
              )}
            </>
          )}
        </NextUIProvider>
      </AuthContextProvider>
    </AppContextProvider>
  )
}
