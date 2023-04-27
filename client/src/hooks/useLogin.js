import React, { useState } from "react";
import { actions } from "../context/authContext";
import { privateData } from "../helper/privateData";
import instance from "../services/axios";
import axiosError from "../services/errorHandler/axiosError";
import { useAuthContext } from "./useAuthcontext";


export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    let loginErr;
    setError(null)
    try {

      const { data } = await instance.post('/auth/login', { email, password })
      localStorage.setItem("authToken", data.token)
      
      const user = await privateData()
      dispatch({ type: actions.LOG_IN, payload: user })
      
      loginErr = null
    } catch (err1) {
      const err = axiosError(err1)
      setError(err.error)
    }
    loginErr=error
    return loginErr
  }
  return { login }
}
