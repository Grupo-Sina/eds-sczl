import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'

type PublicRouteProps = {
  children: ReactNode
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const router = useRouter()
  const { isAuthenticaded } = useAuthContext()

  useEffect(() => {
    if (isAuthenticaded) {
      router.push('/vote')
    }
  }, [isAuthenticaded, router])
  if (!isAuthenticaded) {
    return null
  }

  return <>{children}</>
}

export default PublicRoute
