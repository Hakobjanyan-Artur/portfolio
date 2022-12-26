import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../../FrebaseConfig/Config";
import { collection, addDoc } from 'firebase/firestore'

const recommendslices = createSlice({
    name: 'recommend',
    initialState: [],
    reducers: {
        addNewRec(store, {payload}) {
            const usersCollectionRef = collection(db, "recommend")

            const createUser = async () => {
                await addDoc(usersCollectionRef, {name: payload.name, relation: payload.relation, recommend: payload.recommend })
              }
              createUser()
        }
    }
})

export const selectrecommend = state => state.recommend

export const {addNewRec} = recommendslices.actions

export const recommendReducer = recommendslices.reducer