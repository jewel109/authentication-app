import React, { useContext, useState } from 'react'
import { actions } from '../context/authContext'
import instance from '../services/axios'
import axiosError from '../services/errorHandler/axiosError'
import { useAuthContext } from './useAuthcontext'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signUp = async (email, password) => {
    setError(null)
    try {
      const data = await instance.post('/auth/register', { email, password })

      dispatch({ type: actions.SIGN_IN, payload: data })

    } catch (err) {
      const error = axiosError(err)
      setError(error.error)
    }

  }

  return { signUp, error }
} 
