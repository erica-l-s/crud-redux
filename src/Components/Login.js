import React, {useState} from 'react'
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState("");
    
    
    const onInput = (e) => setUsername(e.target.value);

  return (
    <div className='App'>
        <form className='login_form'>
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