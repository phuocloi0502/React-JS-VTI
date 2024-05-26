import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { urlApi } from '../../utils/constants';
import userService from '../../services/userService';
import axios from 'axios';

// get all
export const getAll = createAsyncThunk('get', async () => {
    const data = (await userService.getAll()).data;
    return data;
});
//get by Id
export const getById = createAsyncThunk('getById', async (id) => {
    const data = (await userService.getById(id)).data;
    return data;
});
// delete
export const deleteById = createAsyncThunk('delete', async (id, thunkAPI) => {
    const dataDelete = (await userService.delete(id)).data;
    thunkAPI.dispatch(getAll())
});

// update
export const updateUser = createAsyncThunk('update', async (body, thunkAPI) => {
    const data = (await axios.put(urlApi + body.id, body)).data;
    thunkAPI.dispatch(getAll());
    thunkAPI.changeUserId(data.id)
});

// create
export const createUser = createAsyncThunk('create', async (body, thunkAPI) => {

    const data = (await axios.post(urlApi, body)).data;
    console.log(data.id, 'created data')
    thunkAPI.dispatch(getAll());
    return data;

});

// create account
export const createAccount = createAsyncThunk('createAccount', async (body, thunkAPI) => {

    const data = (await axios.post(urlApi, body)).data;
    console.log(data.id, 'created Account')
    thunkAPI.dispatch(getAll());
    return data;

});




export const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState: {
        userIdCurrent: '',
        userId: -1,
        deleteId: -1,
        dataApi: [],
        dataByIdApi: {},
        loading: false,
    },
    reducers: {
        changeUserId: (state, action) => {
            state.userId = action.payload

        },
        changeUserIdCurrent: (state, action) => {
            state.userIdCurrent = action.payload


        },
        changeDeleteId: (state, action) => {
            state.deleteId = action.payload;

        },

    },
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.dataApi = action.payload;
        });
        // delete user---
        builder.addCase(deleteById.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(deleteById.fulfilled, (state, action) => {
            state.loading = false
        });
        builder.addCase(deleteById.rejected, (state, action) => {
            state.loading = false
        });
        // delete user---

        // get by id ---
        builder.addCase(getById.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getById.fulfilled, (state, action) => {
            state.loading = false;
            state.dataByIdApi = action.payload;
        });
        builder.addCase(getById.rejected, (state, action) => {
            state.loading = false;
        });
        // get by id ---



        // update
        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;

        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
        });
        // update ---

        // create
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userId = action.payload.id;

        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
        });
        // create ---

        // create account
        builder.addCase(createAccount.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.loading = false;
            localStorage.setItem('idCurrent', action.payload.id);
            localStorage.setItem('userNameCurrent', action.payload.username);

        });
        builder.addCase(createAccount.rejected, (state, action) => {
            state.loading = false;
        });
        // create ---
    },
})
export const { changeUserId, changeDeleteId, changeUserIdCurrent } = dataUserSlice.actions;
export default dataUserSlice.reducer;

