import React, { createContext, useContext, ReactNode, useState } from 'react'

type AppContextType = {
  isFormSubmitted: boolean
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  confirmedVote: boolean
  setConfirmedVote: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [confirmedVote, setConfirmedVote] = useState<boolean>(false)

  const contextValue: AppContextType = {
    isFormSubmitted,
    setIsFormSubmitted,
    confirmedVote,
    setConfirmedVote,
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
