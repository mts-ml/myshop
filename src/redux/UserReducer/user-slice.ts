import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
   name: string,
   email: string
}

interface UserState {
   user: User | null
}

const initialState: UserState = {
   user: null
}


export const userSlice = createSlice({
   initialState,
   name: 'user',
   reducers: {
      // 1ª action: login
      login: (state: UserState, action: PayloadAction<User>) => {
         state.user = action.payload
      },
      // 2ª action: logout (não é necessário payloa).
      logout: (state: UserState) => {
         state.user = null
      }
   }
})

export const { login, logout } = userSlice.actions
