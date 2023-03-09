import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    largeBox: [],
    errorlargeBox: null,
    isLoading:false
}

const baseUrl = 'http://localhost:8000/largeBox'

export const getLargeBox = createAsyncThunk('largeBox/getLargeBox',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}`)
      
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let largeBoxSlice = createSlice({
    name: 'largeBox',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getLargeBox.pending]: (state, action) => {
            state.isLoading = true
        },
        [getLargeBox.fulfilled]: (state, action) => {
            state.isLoading = false
            state.largeBox = action.payload
        },
        [getLargeBox.rejected]: (state, action) => {
            state.isLoading = false
            state.errorlargeBox = action.payload
        },
    }
})


export const largeBoxReducer = largeBoxSlice.reducer;
export const largeBoxActions = largeBoxSlice.actions;
