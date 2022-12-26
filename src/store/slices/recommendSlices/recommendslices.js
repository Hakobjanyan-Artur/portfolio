import { createSlice } from "@reduxjs/toolkit";

const recommendslices = createSlice({
    name: 'recommend',
    initialState: [],
    reducers: {
        
    }
})

export const selectrecommend = state => state.recommend

export const {} = recommendslices.actions

export const recommendReducer = recommendslices.reducer