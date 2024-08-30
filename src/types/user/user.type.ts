export type User = {
  email: string
  password: string
}

export interface LoginRequest {
  Email: string
  Password: string
}
export type ForgotPasswordRequest = {
  ToEmail: string
}

export type ResetPasswordRequest = {
  Email: string
  NewPassword: string
  Code: string
}

export type SignUpRequest = {
  ToEmail: string
}

export type VerifyCodeRequest = {
  Email: string
  CodeNumber: string
}

export type CreatePasswordRequest = {
  Email: string
  Password: string
  Token: string
  DeviceId: string
  DeviceName: string
  WebLoginName: string
}

export type AuthRequest = {
  tokenId: string
}
