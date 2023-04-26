import React, { useContext, useState } from 'react'
import { actions } from '../context/authContext'
import { privateData } from '../helper/privateData'
import instance from '../services/axios'
import axiosError from '../services/errorHandler/axiosError'
import { useAuthContext } from './useAuthcontext'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signUp = async (username,email, password) => {
    let signUpErr;
    setError(null)
    try {
      const { data } = await instance.post('/auth/register', { username,email, password })
      console.log(data)
      localStorage.setItem("authToken", data.token)
      const user = await privateData()
      dispatch({ type: actions.SIGN_IN, payload: user })
      signUpErr = null
    } catch (err) {
      const error = axiosError(err)
      setError(error.error)
      console.log(error.error)
      signUpErr = error.error
    }
    return signUpErr

  }

  return { signUp, error }
} 
