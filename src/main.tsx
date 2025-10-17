import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import outputs from '../amplify_outputs.json'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { getTotal } from './hooks/cartSlice.ts'

Amplify.configure(outputs)

// Create Redux Store
const store = configureStore({
  reducer: { 
    cart: cartSlice,
  }
});

// Dispatch action when app loads initially
store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
