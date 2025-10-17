import { v4 as uuidv4 } from 'uuid'

const uuid = uuidv4()
const BASE_URL = import.meta.env.VITE_API_URL 

export const ENDPOINTS = Object.freeze({
  LOGIN: `${BASE_URL}/login`,
})

export const ROUTES = Object.freeze({
  HOME: '/',
})

export const FORM_API = 'formxapi'
export const SIGNIN_URL=`/account/${uuid}`
export const LOGIN_URL='/account/login'

export const NAME_REGEX=/^[A-Za-z]+$/ 
export const FIRSTNAME_ERROR='Invalid first name'
export const LASTNAME_ERROR='Invalid last name'

export const EMAIL_REGEX=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const EMAIL_ERROR='Invalid email address'

export const PASSWORD_REGEX= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
export const PASSWORD_ERROR=`Minimum 8 characters including one uppercase, lowercase, number and special character`

export const goToLink = (url: string) => {
  return () => window.open(url, '_blank')
};
