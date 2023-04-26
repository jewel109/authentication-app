import react, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/authContext'
import './header.css'

export default function Header() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div className=' flex justify-between'>
      <ul className=''>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      <ul className='flex justify-evenly'>
        {user && (<li>
          <Link to="/logout">logout</Link>
        </li>)}
        {!user && (<><li>
          <Link to="/login">login</Link>
        </li>
          <li className='ml-1'>
            <Link to='/register'>register</Link>
          </li></>)}
      </ul>
    </div>
  )
}
