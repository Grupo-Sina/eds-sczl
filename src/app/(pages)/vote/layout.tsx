import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Votar',
  description:
    'Vote no seu time na Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutVote({ children }: LayoutProps) {
  return <>{children}</>
}
