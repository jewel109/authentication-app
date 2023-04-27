import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


export default function Profile() {
  const { user } = useContext(AuthContext)
  // TODO:make fully chakra based
  console.log(user)
  return (
    <>
      {user && <p> {user.username}</p>}
      {!user && <div><p>You are not logged in . So</p><Link to='/login' >login</Link> </div>}
    </>
  )
}
