'use client'

import ModalLogin from '@/app/components/ModalLogin/Login'
import { ModalResetPassword } from '@/app/components/ModalResetPassword/ModalResetPassword'
import VerificationCode from '@/app/components/VerificationCode/VerificationCode'
import { useAppContext } from '@/app/context/AppContext'
import React from 'react'
import Image from 'next/image'
import ChampionPromo from '@/app/components/ChampionPromo/ChampionPromo'
import championlogo from '../../../../public/championlogo.png'

export default function Register() {
  const { shouldShowVerificationCode } = useAppContext()

  return (
    <div className="z-20 flex flex-col md:flex-row items-center w-full justify-evenly">
      <div className=" md:w-[60%] flex flex-col p-4 px-20 overflox-x-hidden">
        <ChampionPromo />
      </div>
      {shouldShowVerificationCode ? (
        <VerificationCode />
      ) : (
        <Image
          src={championlogo}
          alt="championlogo"
          className="hidden md:flex sm:mb-6 sm:w-[40%] md:mb-0 max-w-[258px] max-h-[182px] md:max-w-[601px] md:max-h-[425px]"
        />
      )}
      <ModalLogin />
      <ModalResetPassword />
    </div>
  )
}
