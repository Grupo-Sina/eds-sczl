import { useAppContext } from '@/app/context/AppContext'
import ResetPassword from '../ResetPassword/ResetPassword'
import FormResetPasswordComponent from '../FormResetPasswordComponent/FormResetPassword'
import { Modal, ModalContent } from '@nextui-org/react'

export function ModalResetPassword() {
  const {
    shouldShowResetPassword,
    setShouldShowResetPassword,
    modalVisible,
    setModalVisible,
  } = useAppContext()
  return (
    <Modal
      scrollBehavior="outside"
      isOpen={modalVisible === 'reset'}
      onOpenChange={() => {
        setModalVisible(undefined)
        setShouldShowResetPassword(false)
      }}
      className="md:max-w-[716px] p-[48px] bg-[#0F1768] text-white"
    >
      <ModalContent className="w-[90%]">
        {shouldShowResetPassword ? (
          <ResetPassword />
        ) : (
          <FormResetPasswordComponent />
        )}
      </ModalContent>
    </Modal>
  )
}
