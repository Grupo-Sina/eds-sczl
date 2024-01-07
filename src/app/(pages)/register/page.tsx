'use client'

import FormComponent from '@/app/components/FormComponent/FormComponent'
import ModalLogin from '@/app/components/ModalLogin/Login'
import { ModalResetPassword } from '@/app/components/ModalResetPassword/ModalResetPassword'
import PromoComponent from '@/app/components/PromoComponent/PromoComponent'
import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo'
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'
import VerificationCode from '@/app/components/VerificationCode/VerificationCode'
import { useAppContext } from '@/app/context/AppContext'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { requestVote } from '@/app/api/vote'
import { toast } from 'react-toastify'
import trophy from '../../../../public/trophy.png'
import { Team } from '@/app/utils/teams-and-votes'
import InitialButtons from '@/app/components/InitialButtons/InitialButtons'
import escudozl from '../../../../public/escudozl.png'

export default function Register() {
  const { shouldShowVerificationCode } = useAppContext()

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center w-full justify-evenly md:pr-10 ">
      <div className="flex flex-col p-4 px-20 ">
        <Image
          src={escudozl}
          alt="escudo zl"
          className="flex md:hidden w-[50px] h-[60px] mx-auto mt-8"
        />
        <SecPhasePromo />
        <SecPhaseVote />
        <InitialButtons />
      </div>
      {shouldShowVerificationCode ? <VerificationCode /> : <FormComponent />}
      <ModalLogin />
      <ModalResetPassword />
    </div>
  )
}
