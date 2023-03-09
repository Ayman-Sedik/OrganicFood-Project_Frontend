
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    diseases: [],
    errorDiseases: null,
    isLoading:false
}

const baseUrl = 'http://localhost:8000/diseases'

export const getDiseases = createAsyncThunk('diseases/getDiseases',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}`)
      
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let diseasesSlice = createSlice({
    name: 'diseases',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getDiseases.pending]: (state, action) => {
            state.isLoading = true
        },
        [getDiseases.fulfilled]: (state, action) => {
            state.isLoading = false
            state.diseases = action.payload
        },
        [getDiseases.rejected]: (state, action) => {
            state.isLoading = false
            state.errorDiseases = action.payload
        },
    }
})


export const diseasesReducer = diseasesSlice.reducer;
export const diseasesActions = diseasesSlice.actions;






