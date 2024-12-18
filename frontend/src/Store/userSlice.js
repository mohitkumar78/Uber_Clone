import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    token: ""
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setuser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        }
    }
})

export const { setuser } = userSlice.actions
export default userSlice.reducer