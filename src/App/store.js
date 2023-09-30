import { configureStore } from '@reduxjs/toolkit'
import UserdataSlice from './Crudapp/UserdataSlice'
export const store = configureStore({
    reducer: {
        Crud: UserdataSlice
    },
})