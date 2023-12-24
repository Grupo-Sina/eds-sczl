import { Input } from '@nextui-org/react'
import { useState } from 'react'
import Image from 'next/image'
import phone from '../../../../public/phone.png'
import {
  UseFormRegister,
  FieldErrorsImpl,
  Control,
  Controller,
} from 'react-hook-form'
import InputMask from 'react-input-mask'
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../EyeFilledIcon/EyeFilledIcon'
// import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon/EyeSlashFilledIcon'
// import { EyeFilledIcon } from '../EyeFilledIcon/EyeFilledIcon'
type InputComponentProps = {
  title: string
  name: string
  type: string
  placeholder?: string
  register: UseFormRegister<any>
  errors: Partial<FieldErrorsImpl<any>>
  mask?: string
  disabled?: boolean
  control?: Control<any, any>
  isRequired?: boolean
}

export function InputComponent({
  title,
  name,
  type,
  register,
  errors,
  mask,
  disabled,
  control,
  placeholder,
  isRequired,
}: InputComponentProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const error = errors[name]?.message as string
  return (
    <>
      <label htmlFor={name} className="text-[#CCFFFFFF] text-sm mb-1 mt-2">
        {title} {isRequired && <span className="text-[#DA1414]">*</span>}
      </label>
      {mask ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <InputMask mask={mask} type="text" {...field} disabled={disabled}>
              <Input
                placeholder={placeholder}
                size="sm"
                labelPlacement="outside"
                errorMessage={error}
                isInvalid={!!error}
                color={error ? 'danger' : undefined}
                variant={error ? 'bordered' : undefined}
                startContent={
                  name === 'phone' && <Image src={phone} alt="phone" />
                }
              />
            </InputMask>
          )}
        />
      ) : (
        <Input
          size="sm"
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          {...register(name)}
          labelPlacement="outside"
          errorMessage={error}
          isInvalid={!!error}
          placeholder={placeholder}
          color={error ? 'danger' : undefined}
          variant={error ? 'bordered' : undefined}
          endContent={
            type === 'password' && (
              <button
                className="bg-transparent focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            )
          }
        />
      )}
    </>
  )
}
