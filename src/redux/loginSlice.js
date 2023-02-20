import { createSlice } from '@reduxjs/toolkit'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { auth } from '../utils/firebase/firebase'

const initialState = {
  user: {},
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: async (state) => {
      const token = await AsyncStorage.getItem('@token')

      if (token) {
        return {
          ...state,
          user: token,
        }
      }
    },
    registerLocal: async (state, action) => {
      const { email, password } = action.payload
      const response = await createUserWithEmailAndPassword(auth, email, password)

      return {
        ...state,
        user: response.user,
      }
    },
    loginLocal: async (state, action) => {
      const { email, password } = action.payload
      const response = await signInWithEmailAndPassword(auth, email, password)

      await AsyncStorage.setItem('@token', response._tokenResponse.idToken)

      return {
        ...state,
        user: response.user,
      }
    },
    signinGoogle: async (state) => {
      try {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)

        await AsyncStorage.setItem('@token', response._tokenResponse.idToken)

        return {
          ...state,
          user: response.user,
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },

    logout: async (state) => {
      await signOut(auth)

      return {
        ...state,
        user: {},
      }
    },
  },
})

export const { login, registerLocal, loginLocal, signinGoogle, logout } = loginSlice.actions

export default loginSlice.reducer
