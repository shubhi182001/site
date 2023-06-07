import React, { useEffect, useState } from 'react'
import "./conversations.css"
import axios from 'axios';

const Conversations = ({conversation, currUser}) => {
  const[user,setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const friendId = conversation.members.find((m) => m!== currUser._id)
    const getUser = async() => {
      try{
        const res = await axios("/users?userId=" +friendId);
        setUser(res.data);
      }catch(e){
        console.log(e);
      }
    }
    getUser();
  },[currUser, conversation])

  return (
    <div className='conversation'>
        <img className='conversationImg' 
        src={user?.profilePicture? PF+user.profilePicture : PF + "person/2.jpeg" } 
        alt=''/>
        <span className='conversationName'>{user?.username }</span>

    </div>
  )
}

export default Conversations