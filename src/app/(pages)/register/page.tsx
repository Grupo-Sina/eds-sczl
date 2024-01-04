'use client'

import FormComponent from '@/app/components/FormComponent/FormComponent'
import ModalLogin from '@/app/components/ModalLogin/Login'
import { ModalResetPassword } from '@/app/components/ModalResetPassword/ModalResetPassword'
import PromoComponent from '@/app/components/PromoComponent/PromoComponent'
import SecPhasePromo from '@/app/components/SecPhasePromo/SecPhasePromo'
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'
import VerificationCode from '@/app/components/VerificationCode/VerificationCode'
import { useAppContext } from '@/app/context/AppContext'

export default function Register() {
  const { shouldShowVerificationCode } = useAppContext()
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center w-full justify-evenly">
      <div className=" flex flex-col p-4 px-20">
        <SecPhasePromo />
        <SecPhaseVote />
      </div>
      {shouldShowVerificationCode ? <VerificationCode /> : <FormComponent />}
      <ModalLogin />
      <ModalResetPassword />
    </div>
  )
}
