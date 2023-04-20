import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { logout, selectUser } from '../feature/userSlice';
import {addPost} from '../feature/userSlice'
import './Login.css';
import './Create.css'
import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [username,setUsername] = useState(user)
  
  const user = useSelector(selectUser);


const onInput = (e) => setTitle(e.target.value);

const dispatch = useDispatch()
const handleLogout = (e) =>{
   e.preventDefault();

 dispatch(logout());
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post("https://dev.codeleap.co.uk/careers/",
            {
                username,
                title,
                content
            })
        setUsername('')
        setTitle('')
        setContent('')
       
    } catch (err) {
        console.error(err)
    }
}

  return (
   
    <div className="container-crud">
                
    <div className="header">
        <p>CodeLeap Network</p>
        <button onClick={(e)=> handleLogout(e)}>Logout</button>
    </div>
    <form className="box" onSubmit={handleSubmit}>
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