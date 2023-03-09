// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"













// let initialState = {
   
//     milk:[],
    
//     errorMilk: null,
//     isLoading:false
// }

// const baseUrl = 'http://localhost:5000/'





// export const getMilk = createAsyncThunk('milk/getMilk',async(type, thunkApi) => {
//     const {rejectWithValue} =thunkApi
//     try {
        
//         const { data } = await axios.get(`${baseUrl}${type}`)
//         console.log(data)
//         return data
        
//     } catch (error) {
//         return rejectWithValue(error.message)
//     }
// })

// let milkSlice = createSlice({
//     name: 'milk',
//     initialState,
//     reducers: {
        
//     },
//     extraReducers: {
//         [getMilk.pending]: (state, action) => {
//             state.isLoading = true
//         },
//         [getMilk.fulfilled]: (state, action) => {
//             state.isLoading = false
//             state.milk = action.payload
//         },
//         [getMilk.rejected]: (state, action) => {
//             state.isLoading = false
//             state.errorMilk = action.payload
//         },
//     }
// })


// export const milkReducer = milkSlice.reducer;
// export const milkActions = milkSlice.actions;













import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    milk: [],
    errorMilk: null,
    isLoading: false,
    edited: {}
}

const baseUrl = 'http://localhost:8000'

export const getMilk = createAsyncThunk('milk/getMilk',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}/milk`)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addMilk = createAsyncThunk('milk/addMilk',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.post(`http://localhost:5000/milk`,product)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteMilk = createAsyncThunk('milk/deleteMilk',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.delete(`http://localhost:5000/milk/${type}`)
        
        // console.log(data)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const editeMilk = createAsyncThunk('milk/editeMilk',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        let {id,formValue} = product
        
        const { data } = await axios.put(`http://localhost:5000/milk/${id}`,formValue)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let milkSlice = createSlice({
    name: 'milk',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getMilk.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMilk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.milk = action.payload
        },
        [getMilk.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMilk = action.payload
        },
        // ========================================
        [addMilk.pending]: (state, action) => {
        },
        [addMilk.fulfilled]: (state, action) => {
            state.milk.push(action.payload)
          
        },
        [addMilk.rejected]: (state, action) => {
            state.errorMilk = action.payload
        },
        //  =======================================
        [deleteMilk.pending]: (state, action) => {
        },
        [deleteMilk.fulfilled]: (state, action) => {
            console.log( "delete api:::::" ,action.payload)
            state.milk = state.milk.filter((item) => {
                return item._id  !== action.payload._id
            })
          
        },
        [deleteMilk.rejected]: (state, action) => {
            state.errorMilk = action.payload
        },
        //  =======================================
        [editeMilk.pending]: (state, action) => {
        },
        [editeMilk.fulfilled]: (state, action) => {
            state.edited = action.payload
            let newMilk = [...state.fruits];
            let index = newMilk.indexOf(action.payload);
            newMilk[index] = action.payload;
            state.milk = newMilk
          
        },
        [editeMilk.rejected]: (state, action) => {
            state.errorMilk = action.payload
        },
    }
})


export const milkReducer = milkSlice.reducer;
export const milkActions = milkSlice.actions;
