import { useDisclosure } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'

export type ModalVisible = 'reset' | 'login' | 'login-reset-pass' | undefined

type AppContextType = {
  isFormSubmitted: boolean
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  confirmedVote: boolean
  setConfirmedVote: React.Dispatch<React.SetStateAction<boolean>>
  shouldShowVerificationCode: boolean
  setShouldShowVerificationCode: React.Dispatch<React.SetStateAction<boolean>>
  modalVisible: ModalVisible
  setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>>
  shouldShowResetPassword: boolean
  setShouldShowResetPassword: React.Dispatch<React.SetStateAction<boolean>>
  selectedTeam?: string
  setSelectedTeam: React.Dispatch<React.SetStateAction<string | undefined>>
  isVoteDisabled: boolean
  setIsVoteDisabled: React.Dispatch<React.SetStateAction<boolean>>
  isCardsDisabled: boolean
  setIsCardsDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [confirmedVote, setConfirmedVote] = useState<boolean>(false)
  const [shouldShowVerificationCode, setShouldShowVerificationCode] =
    useState(false)
  const [shouldShowResetPassword, setShouldShowResetPassword] = useState(false)

  const [modalVisible, setModalVisible] = useState<ModalVisible>(undefined)

  const [selectedTeam, setSelectedTeam] = useState<string>()
  const [isVoteDisabled, setIsVoteDisabled] = useState<boolean>(true)
  const [isCardsDisabled, setIsCardsDisabled] = useState<boolean>(true)

  const pathname = usePathname()

  useEffect(() => {
    setIsCardsDisabled(pathname !== '/vote')
  },[pathname])

  const contextValue: AppContextType = {
    modalVisible,
    setModalVisible,
    isFormSubmitted,
    setIsFormSubmitted,
    confirmedVote,
    setConfirmedVote,
    shouldShowVerificationCode,
    setShouldShowVerificationCode,
    setShouldShowResetPassword,
    shouldShowResetPassword,
    selectedTeam,
    setSelectedTeam,
    isVoteDisabled,
    setIsVoteDisabled,
    isCardsDisabled,
    setIsCardsDisabled
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
