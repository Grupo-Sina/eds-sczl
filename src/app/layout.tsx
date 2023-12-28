import { Providers } from './providers'
import '@/app/styles/globals.css'
import React, { ReactNode, Suspense } from 'react'

import { Metadata } from 'next'
import { FacebookPixelEvents } from './components/PixelEvent/PixelEvent'

interface RootLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export const metadata: Metadata = {
  title: {
    template: '%s | EDS - Super Copa Zona Leste',
    default: 'EDS - Super Copa Zona Leste',
  },
  description: 'Esportes da Sorte, EDS, Super Copa Zona Leste',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
