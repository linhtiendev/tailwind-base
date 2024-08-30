export interface UserInfo {
  Id: string
  Email: string
  UserName: string
  FirstName: string | null
  LastName: string | null
  Address?: string | null
  AvatarUrl?: string | null
  Birthday?: string | null
  PhoneNumber?: string | null
  Gender?: string | null
  DriverId: number
}

export interface UserGoogleInfo {
  id: string
  auth_token: string
  expires_in: any
}
