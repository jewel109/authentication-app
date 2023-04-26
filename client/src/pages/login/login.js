import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin.js'


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, error } = useLogin()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)


    const err = await login(email, password)
    if (err == null) {
      navigate("/profile")
    }
  }
  // TODO: make fully chakra based 
  return (
   // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>email </label>
    //     <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
    //     <label> password </label>
    //     <input type="password" onChange={(e) =>
    //       setPassword(e.target.value)} value={password} />
    //     <button type="submit">login</button>
    //   </form>
    //   {error && <p>{error}</p>}
    // </div>
    <p>hei</p>
  )
}
