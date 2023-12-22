declare interface RegisterUserProps {
  fullName: string
  userName: string
  phone: string
  password: string
  confirmPassword: string
}

declare interface LoginProps {
  userName: string
  password: string
}

declare interface VoteProps {
  name: string
}

declare interface SendCodeResetPasswordProps {
  phone: string
}

declare interface ResetPasswordProps {
  code: string
  userId: string
  newPassword: string
}
