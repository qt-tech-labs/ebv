import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = usersSlice.actions

export const selectUserFullName = state => state.users.fullName

export default usersSlice.reducer