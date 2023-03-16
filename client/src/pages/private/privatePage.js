import React, { useEffect, useState } from "react";
import instance from "../../services/axios";


export default function PrivatePage() {
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)


  const token = localStorage.getItem('authToken')

  const getPrivate = async () => {
    setError(null)
    try {

      const data = await instance.get('/auth/private', { headers: { "Authorization": `Bearer ${token}` } })
      console.log(data.data.user.email)
      setUser(data.data.user.email)
    } catch (err) {
      console.log(err)
      setError("error")
      setUser(null)
    }
  }
  useEffect(() => {
    console.log("ehi")
    getPrivate()
  }, [user])


  return (
    <>
      <p>{user}</p>
      <p> private data </p>
    </>
  )
}
