import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    initialState:{username:null},
    name:'userLogger',
    reducers: {
        login: (state,action)=>{
            state.username=action.payload
        },
        logout: (state)=>{
            state.username=null
        },
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer;