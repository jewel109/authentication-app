import React, { useEffect, useState } from "react";
import instance from "../services/axios";

export const usePrivateData = async () => {

  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  setError(null)

  const token = localStorage.getItem('authToken')
  useEffect(async () => {
    try {

      const { user } = await instance.get('/auth/private', { headers: { "Authorization": `Bearer ${token}` } })

      setUser(user)

    } catch (err) {
      console.log(err)
      setError("error")
    }
  }, [token])


  return { user, error }
}
