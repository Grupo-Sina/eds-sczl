import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { inputListLogin, schemaLogin } from '@/app/schemas/login'
import { InputComponent } from '../InputComponent/Input'
import { login } from '@/app/api/user'
import { toast } from 'react-toastify'
import { useAuthContext } from '@/app/context/AuthContext'
import { useAppContext } from '@/app/context/AppContext'

type ModalLoginProps = {
  isOpen: boolean
  onOpenChange: () => void
}

export default function ModalLogin({ isOpen, onOpenChange }: ModalLoginProps) {
  const [loading, setLoading] = useState(false)
  const {
    handleAuthWithToken,
    setPhoneSendVerificationCode,
    setUserIdVerificationCode,
  } = useAuthContext()

  const { onOpenChangeModalLogin, setShouldShowVerificationCode } =
    useAppContext()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginProps>({
    resolver: yupResolver(schemaLogin),
    mode: 'onChange',
  })

  const handleLogin = async (data: LoginProps) => {
    setLoading(true)
    const res = await login(data)
    console.log(res)
    if (res?.data) {
      if (res?.data.access_token) {
        handleAuthWithToken(res?.data.access_token)
        window.location.href = '/vote'
      } else if (res?.data.phone && res?.data.userId) {
        setUserIdVerificationCode(res?.data.userId)
        setPhoneSendVerificationCode(res?.data.phone)
        onOpenChangeModalLogin()
        setShouldShowVerificationCode(true)
      }
    } else if (res?.error) {
      toast.error(res?.error)
    }
    setLoading(false)
  }

  return (
    <Modal
      scrollBehavior="outside"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="md:max-w-[716px] p-[48px] bg-[#0F1768] text-white"
    >
      <ModalContent className="w-[90%]">
        {(onClose) => (
          <>
            <p className="ml-6">Bilhete da Sorte</p>
            <ModalHeader className="text-[28px]">
              FAÇA LOGIN E VOTE!
            </ModalHeader>
            <ModalBody className="p-[24px]">
              <form onSubmit={handleSubmit(handleLogin)} method="post">
                {inputListLogin.map((item, index) => (
                  <InputComponent
                    key={index}
                    errors={errors}
                    name={item.name}
                    title={item.title}
                    type={item.type}
                    isRequired={item.isRequired}
                    register={register}
                    control={control}
                  />
                ))}
                <Button
                  type="submit"
                  disabled={!isDirty || !isValid || loading}
                  radius="full"
                  className="disabled:opacity-50 bg-[#00E46F] font-headingBold text-[#003B9C] text-center text-[16px] py-3 px-8 font-extrabold leading-5 mt-3 w-full"
                >
                  LOGIN
                </Button>
              </form>

              <hr
                style={{
                  borderTop: '1px solid #FFFFFF33',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              />
              <div className="flex items-center space-x-4">
                <p className="text-[20px] font-semibold">Esqueceu a senha?</p>
                <Button
                  radius="full"
                  variant="bordered"
                  className="font-headingBold bg-transparent border-[#00E46F] text-[16px] text-[#00E46F] font-bold py-3 px-8"
                >
                  REDEFINIR SENHA
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
