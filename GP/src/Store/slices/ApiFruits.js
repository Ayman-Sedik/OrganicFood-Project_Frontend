

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    fruits: [],
    errorFruits: null,
    isLoading: false,
    edited: {}
}

const baseUrl = 'http://localhost:8000'

export const getFruits = createAsyncThunk('fruits/getFruits',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}/fruits`)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addFruits = createAsyncThunk('fruits/addFruits',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.post(`http://localhost:5000/fruits`,product)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteFruits = createAsyncThunk('fruits/deleteFruits',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.delete(`http://localhost:5000/fruits/${type}`)
        
        // console.log(data)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const editeFruits = createAsyncThunk('fruits/editeFruits',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        let {id,formValue} = product
        
        const { data } = await axios.put(`http://localhost:5000/fruits/${id}`,formValue)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let fruitsSlice = createSlice({
    name: 'fruits',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getFruits.pending]: (state, action) => {
            state.isLoading = true
        },
        [getFruits.fulfilled]: (state, action) => {
            state.isLoading = false
            state.fruits = action.payload
        },
        [getFruits.rejected]: (state, action) => {
            state.isLoading = false
            state.errorFruits = action.payload
        },
        // ========================================
        [addFruits.pending]: (state, action) => {
        },
        [addFruits.fulfilled]: (state, action) => {
            state.fruits.push(action.payload)
          
        },
        [addFruits.rejected]: (state, action) => {
            state.errorFruits = action.payload
        },
        //  =======================================
        [deleteFruits.pending]: (state, action) => {
        },
        [deleteFruits.fulfilled]: (state, action) => {
            console.log( "delete api:::::" ,action.payload)
            state.fruits = state.fruits.filter((item) => {
                return item._id  !== action.payload._id
            })
          
        },
        [deleteFruits.rejected]: (state, action) => {
            state.errorFruits = action.payload
        },
        //  =======================================
        [editeFruits.pending]: (state, action) => {
        },
        [editeFruits.fulfilled]: (state, action) => {
            state.edited = action.payload
            let newFruits = [...state.fruits];
            let index = newFruits.indexOf(action.payload);
            newFruits[index] = action.payload;
            state.fruits = newFruits
          
        },
        [editeFruits.rejected]: (state, action) => {
            state.errorFruits = action.payload
        },
    }
})


export const fruitsReducer = fruitsSlice.reducer;
export const fruitsActions = fruitsSlice.actions;




