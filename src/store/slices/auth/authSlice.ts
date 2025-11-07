import { createSlice } from '@reduxjs/toolkit';


interface AuthState {
  email: string,
  password: string,
  imageProfile:  string,
  userStatus: null | string,
  emailVerified: null | string,
  firstLastName: string,
  givenName: string,
  phoneNumber: string,
  secondLastName: string
}

const initialState: AuthState = {
  imageProfile: '',
  email: '',
  password: '',
  emailVerified: null,
  firstLastName: '',
  givenName: '',
  phoneNumber: '',
  secondLastName: '',
  userStatus: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.email = payload.email
      state.imageProfile = payload.imageProfile
      state.firstLastName = payload.firstLastName
      state.givenName = payload.givenName
      state.secondLastName = payload.secondLastName
      state.phoneNumber = payload.phoneNumber
      state.userStatus = payload.userStatus
    },

    loginFirstStep: (state, {payload})=> {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.email = payload.email
      state.emailVerified = payload.emailVerified
    },
    /* logout: (state, { payload }) => {

    }, */

    registerStep1: (state, { payload }) => {
      state.email = payload.email
    },

    registerStep2: (state, { payload }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.email = payload.email
        state.password = payload.password
    },

    updateImageProfile: (state, { payload }) => {
      state.imageProfile = payload
    },

    setUserStatus: (state, { payload }) => {
      state.userStatus = payload
    }
  }
})


export const { login, /* logout, */ registerStep1,
  registerStep2, updateImageProfile, setUserStatus } = authSlice.actions;

export default authSlice.reducer;