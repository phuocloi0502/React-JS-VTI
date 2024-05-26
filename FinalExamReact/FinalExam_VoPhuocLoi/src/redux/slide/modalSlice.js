import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        updateModal: false,
        createModal: false

    },
    reducers: {
        changeStateUpdateModal: (state, action) => {
            state.updateModal = action.payload;

        },
        changeStateCreateModal: (state, action) => {
            state.createModal = action.payload;

        },
    },
});

export const { changeStateUpdateModal, changeStateCreateModal } = modalSlice.actions;
export default modalSlice.reducer;
