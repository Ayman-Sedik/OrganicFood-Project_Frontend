
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    meals: [],
    errorMeals: null,
    isLoading:false
}

const baseUrl = 'http://localhost:8000/meals'

export const getMeals = createAsyncThunk('meals/getMeals',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}`)
      
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getMeals.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMeals.fulfilled]: (state, action) => {
            state.isLoading = false
            state.meals = action.payload
        },
        [getMeals.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMeals = action.payload
        },
    }
})


export const mealsReducer = mealsSlice.reducer;
export const mealsActions = mealsSlice.ameals





