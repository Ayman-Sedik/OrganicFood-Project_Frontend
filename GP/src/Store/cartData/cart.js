import { createSlice } from "@reduxjs/toolkit"
import { json } from "react-router-dom"





function addToLocalStorage(data){
    localStorage.setItem('data',JSON.stringify(data))
}



let data = localStorage.getItem('data') != null ? JSON.parse(localStorage.getItem('data')) : []


let initialState = {
    count:0,
    
    cartItem: data,
 
}

 

const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        increamentItem: (state, action) => { 

            let exist = state.cartItem.find((elm)=>elm._id===action.payload._id)
            if (exist) {
                console.log(`existtttttttttttt`)
                let cart = state.cartItem.map((elm, index) => {
                    return elm._id === action.payload._id ? { ...exist, qty: exist.qty + 1 }:elm
                })
                state.cartItem = cart
                addToLocalStorage(cart)
            } else {
                let cart = [...state.cartItem,{...action.payload,qty:1}]
                state.cartItem = cart
                addToLocalStorage(cart)
                
            }
            
            
        },
        decreamentItem: (state, action) => {
            let exist = state.cartItem.find((elm) => elm._id === action.payload._id)
            if (exist.qty > 1) {
                let cart = state.cartItem.map((elm) => {
                    return elm._id === action.payload._id?{...exist,qty: exist.qty - 1}:elm
                })
                state.cartItem = cart
                addToLocalStorage(cart)
            } 
        },
        deleteItem: (state, action) => {
            let cart = state.cartItem.filter((elm, index) => {
                return elm._id !== action.payload._id
            })
            state.cartItem = cart
            addToLocalStorage(cart)
        }
        
        
    }
})

export let cartReducer = cartSlice.reducer;
export let {increamentItem , decreamentItem,deleteItem} = cartSlice.actions;
