import React, { useContext, useEffect } from "react";
import { actions, AuthContext } from "../../context/authContext";
import { useAuthContext } from "../../hooks/useAuthcontext";
// TODO: make fully chakra based

export default function Logout() {

  const { dispatch } = useAuthContext()

  useEffect(() => {
    // localStorage.removeItem("authToken")
    dispatch({ type: actions.LOG_OUT })
  }, [])
  return (
    <>
      <p>Log out successfully</p>
    </>
  )
}
