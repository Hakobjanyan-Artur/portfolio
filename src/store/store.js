import { configureStore } from "@reduxjs/toolkit";
import { langReducer } from "./slices/langs/langsSlice";
import { recommendReducer } from "./slices/recommendSlices/recommendslices";

const store = configureStore({
    reducer: {
        langs: langReducer,
        recommend: recommendReducer
    }
})

export default store