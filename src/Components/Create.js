import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { logout, selectUser } from '../feature/userSlice';
import './Login.css';
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const user = useSelector(selectUser);

const onInput = (e) => setTitle(e.target.value);

const dispatch = useDispatch()
const handleLogout = (e) =>{
   e.preventDefault();

 dispatch(logout());
  }

  return (
   
    <div className="container-crud">
                
    <div className="header">
        <p>CodeLeap Network</p>
        <button onClick={(e)=> handleLogout(e)}>Logout</button>
    </div>
    <form className="box" >
        <h2>What's on your mind?</h2>

        <div>
            <p>Title</p>
            <input
                value={title}
                className="input-title"
                onInput={onInput}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </div>
        <div>
            <p>Content</p>
            <input
                value={content}
                className="input-content"
                onChange={(e) => setContent(e.target.value)}
            ></input>
        </div>
        <button className='btn-crud'
            disabled={!content}
        >Create</button>
    </form>
    <div>
    
    </div>
 </div>
  )
}

export default Create