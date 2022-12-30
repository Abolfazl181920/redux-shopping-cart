import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })

            state.amount = amount
            state.total = total
        }
    }
})

export const { 
    increase, 
    decrease, 
    clearCart,
    removeItem,
    calculateTotals
} 
= cartSlice.actions

export default cartSlice.reducer