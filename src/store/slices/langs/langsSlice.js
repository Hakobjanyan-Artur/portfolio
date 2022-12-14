import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'langs',
    initialState: 'eng',
    reducers: {
        togglelang(state, {payload}) {
            return payload
        }
    }
})

export const selectLang = state => state.langs

export const {togglelang} = langSlice.actions

export const langReducer = langSlice.reducer