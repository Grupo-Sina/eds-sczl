'use client'

import { Providers } from './providers'
import './globals.css'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { AppContextProvider } from './context/AppContext'
import { AuthContextProvider } from './context/AuthContext'
import PrivateRoute from './routes/private-router'
import { usePathname } from 'next/navigation'
import { APP_PUBLIC_ROUTES } from './routes/public-routes'

// export const metadata: Metadata = {
//   title: "EDS - Super Copa Zona Leste",
//   description: "Esportes da Sorte, EDS, Super Copa Zona Leste",
// };

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <html lang="pt-br">
      <Head>
        <title>EDS - Super Copa Zona Leste</title>
        <meta
          name="description"
          content={'Esportes da Sorte, EDS, Super Copa Zona Leste' || ''}
        />
      </Head>
      <body className="overflow-x-hidden">
        <AppContextProvider>
          <AuthContextProvider>
            <Providers>
              {pathname && (
                <>
                  {APP_PUBLIC_ROUTES.includes(pathname) ? (
                    <>{children}</>
                  ) : (
                    <PrivateRoute>{children}</PrivateRoute>
                  )}
                </>
              )}
            </Providers>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
