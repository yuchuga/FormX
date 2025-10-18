import { ReactNode, Dispatch, SetStateAction } from 'react'

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextType {
  login: (payload: ILogin) => Promise<ILoginResp | void>
  logout: () => void
  message: string | null
  setMessage: Dispatch<SetStateAction<string | null>>
}

export interface ILogin {
  username: string
  password: string
}

export interface ILoginResp {
  token: string
  email: string
  name: string
}