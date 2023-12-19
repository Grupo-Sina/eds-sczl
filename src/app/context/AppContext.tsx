import { useDisclosure } from '@nextui-org/react'
import React, { createContext, useContext, ReactNode, useState } from 'react'

type AppContextType = {
  isFormSubmitted: boolean
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  confirmedVote: boolean
  setConfirmedVote: React.Dispatch<React.SetStateAction<boolean>>
  shouldShowVerificationCode: boolean
  setShouldShowVerificationCode: React.Dispatch<React.SetStateAction<boolean>>
  isOpenModalLogin: boolean
  onOpenChangeModalLogin: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [confirmedVote, setConfirmedVote] = useState<boolean>(false)
  const [shouldShowVerificationCode, setShouldShowVerificationCode] =
    useState(false)

  const { isOpen: isOpenModalLogin, onOpenChange: onOpenChangeModalLogin } =
    useDisclosure()

  const contextValue: AppContextType = {
    isOpenModalLogin,
    onOpenChangeModalLogin,
    isFormSubmitted,
    setIsFormSubmitted,
    confirmedVote,
    setConfirmedVote,
    shouldShowVerificationCode,
    setShouldShowVerificationCode,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(
      'useAppContext deve ser usado dentro de um AppContextProvider',
    )
  }
  return context
}
