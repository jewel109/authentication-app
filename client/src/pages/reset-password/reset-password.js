import react, { useState } from 'react'
import instance from '../../services/axios'
import axiosError from '../../services/errorHandler/axiosError'

export default function ResetPassword() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    try {
      const data = await instance.post('/auth/forgotpassword', { email })
      console.log(data)
      // setEmail("")
    } catch (error) {
      const err = axiosError(error)
      console.log(err.error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>email </label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <button type="">sent email</button>
    </form>
  )
}
