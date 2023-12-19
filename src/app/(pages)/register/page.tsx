'use client'
import FormComponent from '@/app/components/FormComponent/FormComponent'
import ModalLogin from '@/app/components/ModalLogin/Login'
import PromoComponent from '@/app/components/PromoComponent/PromoComponent'
import VerificationCode from '@/app/components/VerificationCode/VerificationCode'
import { useAppContext } from '@/app/context/AppContext'

export default function Register() {
  const {
    shouldShowVerificationCode,
    onOpenChangeModalLogin,
    isOpenModalLogin,
  } = useAppContext()
  return (
    <>
      <PromoComponent />
      {shouldShowVerificationCode ? <VerificationCode /> : <FormComponent />}

      <ModalLogin
        isOpen={isOpenModalLogin}
        onOpenChange={onOpenChangeModalLogin}
      />
      {/* {shouldShowModalLogin && <ModalLogin />} */}
    </>
  )
}
