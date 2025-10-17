import axios from 'axios'
import { useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINTS, ROUTES } from '../utils/constants'
import { AuthContextType, AuthProviderProps, ILogin, ILoginResp } from '../utils/interface'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: AuthProviderProps) => {

  const navigate = useNavigate()

  const [message, setMessage] = useState<string | null>(null)

  const login = async (payload: ILogin): Promise<ILoginResp | void> => {
    try {
      const { data } = await axios.post(ENDPOINTS.LOGIN, payload)
      // console.log('Login API', data)
      sessionStorage.setItem('token', data.token)
      return data
    } catch (e) {
      console.error(e)
    }
  };

  const logout = () => {
    sessionStorage.clear()
    navigate(ROUTES.HOME)
  };
  
  return (
    <AuthContext.Provider value={{ login, logout, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext)
};