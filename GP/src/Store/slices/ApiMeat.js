// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"













// let initialState = {
   
//     meat:[],
    
//     errorMeat: null,
//     isLoading:false
// }

// const baseUrl = 'http://localhost:5000/'





// export const getMeat = createAsyncThunk('meat/getMeat',async(type, thunkApi) => {
//     const {rejectWithValue} =thunkApi
//     try {
        
//         const { data } = await axios.get(`${baseUrl}${type}`)
//         console.log(data)
//         return data
        
//     } catch (error) {
//         return rejectWithValue(error.message)
//     }
// })

// let meatSlice = createSlice({
//     name: 'meat',
//     initialState,
//     reducers: {
        
//     },
//     extraReducers: {
//         [getMeat.pending]: (state, action) => {
//             state.isLoading = true
//         },
//         [getMeat.fulfilled]: (state, action) => {
//             state.isLoading = false
//             state.meat = action.payload
//         },
//         [getMeat.rejected]: (state, action) => {
//             state.isLoading = false
//             state.errorMeat = action.payload
//         },
//     }
// })


// export const meatReducer = meatSlice.reducer;
// export const meatActions = meatSlice.actions;




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    meat: [],
    errorMeat: null,
    isLoading: false,
    edited: {}
}

const baseUrl = 'http://localhost:8000'

export const getMeat = createAsyncThunk('meat/getMeat',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}/meat`)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addMeat = createAsyncThunk('meat/addMeat',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.post(`http://localhost:5000/meat`,product)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteMeat = createAsyncThunk('meat/deleteMeat',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.delete(`http://localhost:5000/meat/${type}`)
        
        // console.log(data)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const editeMeat = createAsyncThunk('meat/editeMeat',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        let {id,formValue} = product
        
        const { data } = await axios.put(`http://localhost:5000/meat/${id}`,formValue)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let meatSlice = createSlice({
    name: 'meat',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getMeat.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMeat.fulfilled]: (state, action) => {
            state.isLoading = false
            state.meat = action.payload
        },
        [getMeat.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMeat = action.payload
        },
        // ========================================
        [addMeat.pending]: (state, action) => {
        },
        [addMeat.fulfilled]: (state, action) => {
            state.meat.push(action.payload)
          
        },
        [addMeat.rejected]: (state, action) => {
            state.errorMeat = action.payload
        },
        //  =======================================
        [deleteMeat.pending]: (state, action) => {
        },
        [deleteMeat.fulfilled]: (state, action) => {
            console.log( "delete api:::::" ,action.payload)
            state.meat = state.meat.filter((item) => {
                return item._id  !== action.payload._id
            })
          
        },
        [deleteMeat.rejected]: (state, action) => {
            state.errorMeat = action.payload
        },
        //  =======================================
        [editeMeat.pending]: (state, action) => {
        },
        [editeMeat.fulfilled]: (state, action) => {
            state.edited = action.payload
            let newMeat = [...state.meat];
            let index = newMeat.indexOf(action.payload);
            newMeat[index] = action.payload;
            state.meat = newMeat
          
        },
        [editeMeat.rejected]: (state, action) => {
            state.errorMeat = action.payload
        },
    }
})


export const meatReducer = meatSlice.reducer;
export const meatActions = meatSlice.actions;
