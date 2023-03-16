import react, { useEffect, useState } from 'react'
import { useSignUp } from '../../hooks/useSignUp'


export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signUp, error } = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password)


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
