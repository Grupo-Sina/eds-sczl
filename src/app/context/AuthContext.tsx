import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, { createContext, useContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

type AuthContextType = {
  isAuthenticaded: boolean
  phoneSendVerificationCode: string
  setPhoneSendVerificationCode: React.Dispatch<React.SetStateAction<string>>
  userIdVerificationCode: string
  setUserIdVerificationCode: React.Dispatch<React.SetStateAction<string>>
  handleAuthWithToken: (accessToken: string) => void
  handleSignOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { 'eds-sclz:x-token': sessionKey } = parseCookies()
  const [phoneSendVerificationCode, setPhoneSendVerificationCode] = useState('')
  const [userIdVerificationCode, setUserIdVerificationCode] = useState('')

  const isAuthenticaded = !!sessionKey

  function handleAuthWithToken(acessToken: string) {
    setCookie(undefined, 'eds-sclz:x-token', acessToken, {
      maxAge: 60 * 60 * 168, // 1 week
    })
  }

  function handleSignOut() {
    destroyCookie(undefined, 'eds-sclz:x-token')
    api.defaults.headers.common.Authorization = ''
    window.location.href = '/register'
  }

  const contextValue: AuthContextType = {
    isAuthenticaded,
    phoneSendVerificationCode,
    setPhoneSendVerificationCode,
    userIdVerificationCode,
    setUserIdVerificationCode,
    handleAuthWithToken,
    handleSignOut,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'useAuthContext deve ser usado dentro de um AuthContextProvider',
    )
  }
  return context
}
