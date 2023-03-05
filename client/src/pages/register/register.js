import react, { useEffect, useState } from 'react'
import instance from '../../services/axios'
import axiosError from '../../services/errorHandler/axiosError'


export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  let errorMesage = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post('/auth/register', {
      email, password
    }).then(response => console.log(response.data.token))
      .catch(err => {
        axiosError(err)

        errorMesage = err.response.data.errors
      })
    if (errorMesage) {
      errorMesage.map(
        er => {

          setError(`${er.param} is incorrect `)
        })
    } else {
      setError("")
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label> password </label>
        <input type="password" onChange={(e) =>
          setPassword(e.target.value)} value={password} />
        <button type="submit">register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
