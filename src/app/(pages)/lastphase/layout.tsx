import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Última fase',
  description:
    'Última fase votação Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutLastPhase({ children }: LayoutProps) {
  return <>{children}</>
}
