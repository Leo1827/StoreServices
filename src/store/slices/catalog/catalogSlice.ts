import { createSlice } from "@reduxjs/toolkit";



const categorisSlice = createSlice({
    name:'categoriSlice',
    initialState:{
        catalog:[]
    },
    reducers:{
        setDataCategoris : (state, {payload})=>{
            state.catalog = payload
        }
    }
    
})



export default categorisSlice.reducer
export const  {setDataCategoris} = categorisSlice.actions