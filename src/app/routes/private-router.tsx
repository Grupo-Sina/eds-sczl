import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter()
  const { isAuthenticaded } = useAuthContext()

  useEffect(() => {
    if (!isAuthenticaded) {
      // router.push('/register')
    }
  }, [isAuthenticaded, router])

  if (!isAuthenticaded) {
    return null
  }

  return <>{children}</>
}

export default PrivateRoute
