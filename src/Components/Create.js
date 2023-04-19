import React from 'react'
import {useDispatch} from "react-redux"
import { logout } from '../feature/userSlice';

const Create = () => {
    
const dispatch = useDispatch()
const handleLogout = (e) =>{
   e.preventDefault();

 dispatch(logout());
  }

  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={(e)=> handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Create