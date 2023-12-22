'use client'
import FormResetPasswordComponent from '@/app/components/FormResetPasswordComponent/FormResetPassword'
import ModalLogin from '@/app/components/ModalLogin/Login'
import PromoComponent from '@/app/components/PromoComponent/PromoComponent'
import ResetPassword from '@/app/components/ResetPassword/ResetPassword'

import { useAppContext } from '@/app/context/AppContext'

export default function Register() {
  const { shouldShowResetPassword } = useAppContext()
  return (
    <>
      <PromoComponent />
      {shouldShowResetPassword ? (
        <ResetPassword />
      ) : (
        <FormResetPasswordComponent />
      )}

      {/* {shouldShowModalLogin && <ModalLogin />} */}
    </>
  )
}
