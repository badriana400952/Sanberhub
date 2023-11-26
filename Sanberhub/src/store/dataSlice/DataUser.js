import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiData } from "../../services/api";



export const addDataUser = createAsyncThunk("data/addDataUser", async (newData) => {
    try {
        const ress = await ApiData.post(`/testapi/user`, newData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        console.log(ress.data.data)
        return ress.data.data
    } catch (error) {
        console.log(error);
    }
})
// get
export const getUsers = createAsyncThunk("data/getUsers", async () => {
    try {
        const ress = await ApiData.get(`/testapi/user`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        return ress.data.data
    } catch (error) {
        console.log(error);
    }
})
// detail
export const getUsersID = createAsyncThunk("data/getUsersID", async (id) => {
    try {
        const ress = await ApiData.get(`/testapi/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        console.log(ress.data)
        return ress.data.data
    } catch (error) {
        console.log(error);
        throw error
    }
})

// edit
export const getUsersEdit = createAsyncThunk("data/getUsersEdit", async ({ id, newdata }) => {
    try {
        const ress = await ApiData.put(`/testapi/user/${id}`, newdata, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        });

        console.log(ress.data.data)
        return ress.data.data
    } catch (error) {
        console.error("Error edit :", error.message);
        throw error;
    }
});


export const getUsersDelete = createAsyncThunk("data/getUsersDelete", async (id) => {
    try {
        const ress = await ApiData.delete(`/testapi/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        console.log(ress.data.data)
        return ress.data.data
    } catch (error) {
        console.log(error);
    }
})

const dataUserSlice = createSlice({
    name: "data",
    initialState: {
        dataUser: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        //add data user
        builder.addCase(addDataUser.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(addDataUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        });

        builder.addCase(addDataUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

        //get
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false

            state.data = action.payload
        });

        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });

        //detail
        builder.addCase(getUsersID.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getUsersID.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        });

        builder.addCase(getUsersID.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });


        //edit
        builder.addCase(getUsersEdit.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getUsersEdit.fulfilled, (state, action) => {
            state.loading = false

            state.data = action.payload
        });

        builder.addCase(getUsersEdit.rejected, (state, action) => {
            state.loading = false
            console.error("Error editing user:", action.error.message);
            state.error = action.error.message
        });


        //delete
        builder.addCase(getUsersDelete.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getUsersDelete.fulfilled, (state, action) => {
            state.loading = false

            state.data = action.payload
        });

        builder.addCase(getUsersDelete.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });
    }
})

export default dataUserSlice.reducer 