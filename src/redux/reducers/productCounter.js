import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        valor:0
    },
    reducers:{
        increment:(state) => {
            state.valor +=1
        },
        decrement:(state) => {
            state.valor-=1
        },
    }
})

export const {increment, decrement } = counterSlice.actions

export default counterSlice.reducer;