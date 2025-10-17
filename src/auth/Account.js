import React, { createContext } from 'react';
import Pool from './UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const AccountContext = createContext();

const Account = (props) => {
  const getSession = async () => 
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser(); //check if user exists
      if (user) {
        user.getSession((session, err) => {
          !err ? resolve(session) : reject()
        }) 
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) => 
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess:', data)
          resolve(data)
        },
        onFailure: (err) => {
          console.error('onFailure:', err)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired:', data)
          resolve(data)
        }
      })
    });

  const logout = () => {
    const user = Pool.getCurrentUser()
    user && user.signOut()
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
}

export { Account, AccountContext }