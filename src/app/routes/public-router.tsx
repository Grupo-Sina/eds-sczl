import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'

type PublicRouteProps = {
  children: ReactNode
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const router = useRouter()
  const { isAuthenticaded } = useAuthContext()
  const pathname = usePathname()
  useEffect(() => {
    if (isAuthenticaded) {
      router.push('/vote')
    }
    // else if (pathname === '/') {
    //   router.push('/register')
    // }
  }, [isAuthenticaded, router, pathname])

  return <>{children}</>
}

export default PublicRoute
