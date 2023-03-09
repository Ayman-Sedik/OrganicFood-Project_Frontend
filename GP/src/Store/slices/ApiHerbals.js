// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"













// let initialState = {
   
//     herbals:[],
    
//     errorHerbals: null,
//     isLoading:false
// }

// const baseUrl = 'http://localhost:5000/'





// export const getHerbals = createAsyncThunk('herbals/getHerbals',async(type, thunkApi) => {
//     const {rejectWithValue} =thunkApi
//     try {
        
//         const { data } = await axios.get(`${baseUrl}${type}`)
//         console.log(data)
//         return data
        
//     } catch (error) {
//         return rejectWithValue(error.message)
//     }
// })

// let herbalsSlice = createSlice({
//     name: 'herbals',
//     initialState,
//     reducers: {
        
//     },
//     extraReducers: {
//         [getHerbals.pending]: (state, action) => {
//             state.isLoading = true
//         },
//         [getHerbals.fulfilled]: (state, action) => {
//             state.isLoading = false
//             state.herbals = action.payload
//         },
//         [getHerbals.rejected]: (state, action) => {
//             state.isLoading = false
//             state.errorHerbals = action.payload
//         },
//     }
// })


// export const herbalsReducer = herbalsSlice.reducer;
// export const herbalsActions = herbalsSlice.actions;





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    herbals: [],
    errorHerbals: null,
    isLoading: false,
    edited: {}
}

const baseUrl = 'http://localhost:8000'

export const getHerbals = createAsyncThunk('herbals/getHerbals',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.get(`${baseUrl}/herbals`)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addHerbals = createAsyncThunk('herbals/addHerbals',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.post(`http://localhost:5000/herbals`,product)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteHerbals = createAsyncThunk('herbals/deleteHerbals',async(type, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        
        const { data } = await axios.delete(`http://localhost:5000/herbals/${type}`)
        
        // console.log(data)
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const editeHerbals = createAsyncThunk('herblas/editeHerbals',async(product, thunkApi) => {
    const {rejectWithValue} =thunkApi
    try {
        let {id,formValue} = product
        
        const { data } = await axios.put(`http://localhost:5000/herbals/${id}`,formValue)
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

let herbalsSlice = createSlice({
    name: 'herbals',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getHerbals.pending]: (state, action) => {
            state.isLoading = true
        },
        [getHerbals.fulfilled]: (state, action) => {
            state.isLoading = false
            state.herbals = action.payload
        },
        [getHerbals.rejected]: (state, action) => {
            state.isLoading = false
            state.errorHerbals = action.payload
        },
        // ========================================
        [addHerbals.pending]: (state, action) => {
        },
        [addHerbals.fulfilled]: (state, action) => {
            state.herbals.push(action.payload)
          
        },
        [addHerbals.rejected]: (state, action) => {
            state.errorHerbals = action.payload
        },
        //  =======================================
        [deleteHerbals.pending]: (state, action) => {
        },
        [deleteHerbals.fulfilled]: (state, action) => {
            console.log( "delete api:::::" ,action.payload)
            state.herbals = state.herbals.filter((item) => {
                return item._id  !== action.payload._id
            })
          
        },
        [deleteHerbals.rejected]: (state, action) => {
            state.errorHerbals = action.payload
        },
        //  =======================================
        [editeHerbals.pending]: (state, action) => {
        },
        [editeHerbals.fulfilled]: (state, action) => {
            state.edited = action.payload
            let newHerbals = [...state.fruits];
            let index = newHerbals.indexOf(action.payload);
            newHerbals[index] = action.payload;
            state.herbals = newHerbals
          
        },
        [editeHerbals.rejected]: (state, action) => {
            state.errorHerbals = action.payload
        },
    }
})


export const herbalsReducer = herbalsSlice.reducer;
export const herbalsActions = herbalsSlice.actions;
