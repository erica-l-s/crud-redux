import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import './Login.css'
import { login } from '../feature/userSlice';



const Login = () => {
    const [username, setUsername] = useState("");
        
    const onInput = (e) => setUsername(e.target.value);
     
    const dispatch = useDispatch()

    const handleSubmit =(e) =>{
        e.preventDefault();

        dispatch(login({
          name:username,
          loggedIn: true
        })
      )
    }

  return (
    <div className='App'>
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
            <h3>Welcome to CodeLeap network!</h3>
            <p>Please enter your username</p>
            <input 
            placeholder='John doe'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            onInput={onInput}
            />
            
            <button disabled={!username}>Enter</button>
            </form>
        </div>
  )
}

export default Login