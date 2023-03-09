import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    smallBox: [],
    errorSmallBox: null,
    isLoading:false
}

const baseUrl = 'http://localhost:8000/smallBox'

export const getSmallBox = createAsyncThunk('smallBox/getSmallBox',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}`)
      
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let smallBoxSlice = createSlice({
    name: 'smallBox',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getSmallBox.pending]: (state, action) => {
            state.isLoading = true
        },
        [getSmallBox.fulfilled]: (state, action) => {
            state.isLoading = false
            state.smallBox = action.payload
        },
        [getSmallBox.rejected]: (state, action) => {
            state.isLoading = false
            state.errorSmallBox = action.payload
        },
    }
})


export const smallBoxReducer = smallBoxSlice.reducer;
export const smallBoxActions = smallBoxSlice.actions;
