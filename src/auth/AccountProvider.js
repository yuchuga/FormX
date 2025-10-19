import { createContext } from 'react'
import { signIn, signOut, fetchAuthSession, getCurrentUser } from '@aws-amplify/auth'
import './AmplifyConfig' // Run Amplify.configure()

const AccountContext = createContext(null)

const AccountProvider = ({ children }) => {

  const getSession = async () => {
    try {
      const user = await getCurrentUser()
      if (!user) throw new Error('Invalid User!')
      
      const session = await fetchAuthSession()
      return session //token
    } catch (e) {
      console.error(e)
    }
  };

  const authenticate = async (Username, Password) => {
    try {
      const user = await signIn({ username: Username, password: Password })
      return user
    } catch (e) {
      console.error(e)
    }
  };

  const logout = async () => {
    try {
      await signOut()
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {children}
    </AccountContext.Provider>
  )
};

export default AccountProvider;

export const useAccount = () => {
  return useContext(AccountContext)
};