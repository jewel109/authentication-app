import react from 'react'
import { Link } from "react-router-dom"
import './header.css'
export default function Header() {
  return (
    <div>
      <span>
        <Link to='/home'>Home</Link>
      </span>
      <span>
        <Link to="/login">login</Link>
      </span>
      <span>
        <Link to='/register'>register</Link>
      </span>
      <span>
        <Link to='/reset-password' >reset-password</Link>
      </span>
    </div>
  )
}
