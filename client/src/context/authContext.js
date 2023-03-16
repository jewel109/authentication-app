import React, { createContext, useEffect, useReducer } from "react";
import instance from "../services/axios";

export const AuthContext = createContext()

export const actions = {
  SIGN_IN: "sign_in",
  LOG_IN: "log_in",
  RESET_PASSWORD: "reset-password",
  LOG_OUT: "log_out"
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case actions.SIGN_IN:
      return { user: action.payload }
    case actions.LOG_IN:
      return { user: action.payload }
    case actions.LOG_OUT:
      return { user: null }
    case actions.RESET_PASSWORD:
      return {}
    default:
      return state
  }
}
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null })

  useEffect(() => {
    console.log('in AuthContextProvider')
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )

}
