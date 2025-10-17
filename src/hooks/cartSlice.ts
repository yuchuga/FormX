import { createSlice } from '@reduxjs/toolkit'

type Product = {
  id: string
  name: string
  price: number
  quantity: number
};

type Cart = {
  products: Product[],
  totalQuantity: number
  totalPrice: number
};

const initialState: Cart = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      // action.payload -> object that is last added. Condition for similar item added -> add a new key quantity 
      const item = state.products.find((item) => item.id === action.payload.id) 
      if (item) {
        item.quantity += 1
      } else {
        const newPayload = { ...action.payload, quantity: 1 }
        state.products.push(newPayload)
      }
    },
    decrease: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else if (item && item.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== action.payload.id)
      }
    },
    //remove only the item pass to action
    remove: (state, action) => {
      state.products.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.products = state.products.filter((item) => item.id !== cartItem.id)
        }
        return state
      })
    },
    getTotal: (state) => {
      //arr.reduce((acc, curr) => acc + curr, initialValue)
      let cart = state.products.reduce((cart, item) => {
        const { price, quantity } = item
        const itemTotal = price * quantity
        cart.total += itemTotal
        cart.quantity += quantity
        return cart
      }, {
        total: 0,
        quantity: 0
      });
      
      state.totalQuantity = cart.quantity
      state.totalPrice = cart.total
    },
    reset: (state) => {
      state.products = []
    },
  }
});

// actions creators generated for reducer function
export const { add, decrease, remove, getTotal, reset } = cartSlice.actions
export default cartSlice.reducer