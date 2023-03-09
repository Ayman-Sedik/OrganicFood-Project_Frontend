import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    mediumBox: [],
    errorMediumBox: null,
    isLoading:false
}

const baseUrl = 'http://localhost:8000/mediumBox'

export const getMediumBox = createAsyncThunk('mediumBox/getMediumBox',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}`)
      
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let mediumBoxSlice = createSlice({
    name: 'mediumBox',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getMediumBox.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMediumBox.fulfilled]: (state, action) => {
            state.isLoading = false
            state.mediumBox = action.payload
        },
        [getMediumBox.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMediumBox = action.payload
        },
    }
})


export const mediumBoxReducer = mediumBoxSlice.reducer;
export const mediumBoxActions = mediumBoxSlice.actions;
