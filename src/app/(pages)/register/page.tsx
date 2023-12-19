'use client'
import FormComponent from '@/app/components/FormComponent/FormComponent'
import PromoComponent from '@/app/components/PromoComponent/PromoComponent'
import VerificationCode from '@/app/components/VerificationCode/VerificationCode'
import { useAppContext } from '@/app/context/AppContext'

export default function Register() {
  const { shouldShowVerificationCode } = useAppContext()
  return (
    <>
      <PromoComponent />
      {shouldShowVerificationCode ? <VerificationCode /> : <FormComponent />}
    </>
  )
}
