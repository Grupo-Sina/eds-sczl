import { Metadata } from 'next'
import Register from './register/page'

export const metadata: Metadata = {
  title: 'Criar conta',
  description:
    'Criar conta na Esportes da Sorte Na Varzea, Esportes da Sorte, EDS, Super Copa Zona Leste',
}

export default function Index() {
  return (
    <div className="overflow-x-hidden">
      <Register />
    </div>
  )
}
