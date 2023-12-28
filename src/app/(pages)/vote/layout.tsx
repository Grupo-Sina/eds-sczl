import GoogleAnalytics from '@/app/components/GoogleAnalytics/GoogleAnalytics'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Votar',
  description:
    'Vote no seu time na Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste',
}

interface LayoutProps {
  children: React.ReactNode
}

const METRICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

export default function LayoutRegister({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body>{METRICS_ID && <GoogleAnalytics gaId={METRICS_ID} />}</body>
      </html>
      {children}
    </>
  )
}
