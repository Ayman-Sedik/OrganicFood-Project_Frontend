
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    vegetables: [],
    errorVegetable: null,
    isLoading: false,
    edited: {}
}

const baseUrl = 'http://localhost:8000'

export const getVegetables = createAsyncThunk('vegetables/getVegetables',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}/${type}`)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addVegetables = createAsyncThunk('vegetables/addVegetables',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.post(`http://localhost:5000/vegetable`,product)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteVegetables = createAsyncThunk('vegetables/deleteVegetables',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.delete(`http://localhost:5000/vegetable/${type}`)
        
        // console.log(data)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const editeVegetables = createAsyncThunk('vegetables/editeVegetables',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        let {id,formValue} = product
        
        const { data } = await axios.put(`http://localhost:5000/vegetable/${id}`,formValue)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let vegetablesSlice = createSlice({
    name: 'vegetables',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getVegetables.pending]: (state, action) => {
            state.isLoading = true
        },
        [getVegetables.fulfilled]: (state, action) => {
            state.isLoading = false
            state.vegetables = action.payload
        },
        [getVegetables.rejected]: (state, action) => {
            state.isLoading = false
            state.errorVegetable = action.payload
        },
        // ========================================
        [addVegetables.pending]: (state, action) => {
        },
        [addVegetables.fulfilled]: (state, action) => {
            state.vegetables.push(action.payload)
          
        },
        [addVegetables.rejected]: (state, action) => {
            state.errorVegetable = action.payload
        },
        //  =======================================
        [deleteVegetables.pending]: (state, action) => {
        },
        [deleteVegetables.fulfilled]: (state, action) => {
            console.log( "delete api:::::" ,action.payload)
            state.vegetables = state.vegetables.filter((item) => {
                return item._id  !== action.payload._id
            })
          
        },
        [deleteVegetables.rejected]: (state, action) => {
            state.errorVegetable = action.payload
        },
        //  =======================================
        [editeVegetables.pending]: (state, action) => {
        },
        [editeVegetables.fulfilled]: (state, action) => {
            state.edited = action.payload
            let newVegetables = [...state.vegetables];
            let index = newVegetables.indexOf(action.payload);
            newVegetables[index] = action.payload;
            state.vegetables = newVegetables
          
        },
        [editeVegetables.rejected]: (state, action) => {
            state.errorVegetable = action.payload
        },
    }
})


export const vegetablesReducer = vegetablesSlice.reducer;
export const vegetablesActions = vegetablesSlice.actions;




