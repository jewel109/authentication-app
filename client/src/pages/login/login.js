import react, { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'


export default function Login() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [password, setPassword] = useState("")
  const { login, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const msg = await login(email, password)
    setMessage(msg)
    setEmail("")
    setPassword("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label> password </label>
        <input type="password" onChange={(e) =>
          setPassword(e.target.value)} value={password} />
        <button type="submit">login</button>
      </form>
      <p>{message}</p>
      {error && <p>{error}</p>}
    </div>
  )
}
