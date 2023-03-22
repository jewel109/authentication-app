import React, { useState } from "react";
import { actions } from "../context/authContext";
import { privateData } from "../helper/privateData";
import instance from "../services/axios";
import axiosError from "../services/errorHandler/axiosError";
import { useAuthContext } from "./useAuthcontext";


export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  let message;
  const login = async (email, password) => {
    setError(null)
    try {

      const data = await instance.post('/auth/login', { email, password })
      message = data.data.msg ? data.data.msg : "loading"
      localStorage.setItem("authToken", data.data.token)
      const user = await privateData()
      dispatch({ type: actions.LOG_IN, payload: user })
      return { message, user }
    } catch (error) {
      const err = axiosError(error)
      setError(err.error)
    }

  }
  return { login, error }
}
