import { v4 as uuidv4 } from 'uuid'

const uuid = uuidv4()
const BASE_URL = import.meta.env.VITE_API_URL 

export const ENDPOINTS = Object.freeze({
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: 'formxapi/webform/login'
})

export const ROUTES = Object.freeze({
  HOME: '/',
  FORMX: '/products/x1',
  FORMN: '/products/n1',
  PRODUCT: '/collections/all',
  ACCOUNT: '/account',
  LOGIN: '/account/login',
  REGISTER: '/account/register',
  ABOUT: '/pages/about',
  BUY: '/pages/products',
  COMMUNITY: '/pages/community',
  PRIVACY: '/pages/privacy',
  SCPA: '/pages/scpa-opt-out',
  SUPPORT: '/pages/support',
  TERMS: '/pages/terms',
  WARRANTY: '/pages/warranty',
  DISCUSS: 'https://discord.gg/P86qn92eHT',
  DISCORD: 'https://discord.gg/9DpZrdDe',
  INSTAGRAM: 'https://www.instagram.com/formdworks',
  REDDIT: 'https://www.reddit.com/r/formdt1/',
  YOUTUBE: 'https://www.youtube.com/watch?v=RcLdVLr3Oy8',
})

export const SIGNIN_URL = `/account/${uuid}`

export const NAME_REGEX = /^[A-Za-z]+$/ 
export const NAME_ERROR = 'Invalid Name!'

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const EMAIL_ERROR = 'Invalid Email!'

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
export const PASSWORD_ERROR = 'Minimum 8 characters including one uppercase, lowercase, number and special character'

export const goToLink = (url: string) => {
  return () => window.open(url, '_blank')
};
