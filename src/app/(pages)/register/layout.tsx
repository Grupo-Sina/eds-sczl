import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Criar conta',
  description:
    'Criar conta na Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutRegister({ children }: LayoutProps) {
  return <>{children}</>
}
