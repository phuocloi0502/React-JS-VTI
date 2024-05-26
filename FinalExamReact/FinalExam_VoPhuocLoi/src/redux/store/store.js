import { configureStore } from '@reduxjs/toolkit';
import dataUserReducer from '../slide/userSlice';
import modalSlice from '../slide/modalSlice';
export default configureStore({
    reducer: {
        dataUser: dataUserReducer,
        modalSlice: modalSlice
    }
})