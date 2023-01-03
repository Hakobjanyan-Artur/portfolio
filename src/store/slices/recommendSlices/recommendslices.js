import { createSlice } from "@reduxjs/toolkit";
import { db, storage } from "../../../FrebaseConfig/Config";
import { collection, addDoc } from 'firebase/firestore'
import { getDownloadURL,ref, uploadBytesResumable } from "@firebase/storage"

const recommendslices = createSlice({
    name: 'recommend',
    initialState: {
        data: []
    },
    reducers: {
        addNewRec(state, {payload}) {

          const usersCollectionRef = collection(db, "recommend")
          
          if (!payload.file) return
          const storageRef = ref(storage, `/files/${payload.file.name}`)
          const uploadTask = uploadBytesResumable(storageRef, payload.file)
    
          uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            
          }, 
          (err) => {console.log('error')
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            const createUser = async () => {
                await addDoc(usersCollectionRef, {name: payload.name, relation: payload.relation, recommend: payload.recommend, url: url })
              }
            createUser()

            // setTimeout(() => {
            
              
            //   document.location.reload()
            // }, 2000)
          })
          
        }
        )

        },
        getData(state, {payload}) {
            return {
                ...state.data.unshift(...payload) 
            }
        }
    }
})

export const selectrecommend = state => state.recommend

export const {addNewRec, getData } = recommendslices.actions

export const recommendReducer = recommendslices.reducer