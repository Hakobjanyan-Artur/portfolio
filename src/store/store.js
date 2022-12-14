import { configureStore } from "@reduxjs/toolkit";
import { langReducer } from "./slices/langs/langsSlice";

const store = configureStore({
    reducer: {
        langs: langReducer
    }
})

export default store