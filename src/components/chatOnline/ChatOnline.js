import React, { useEffect, useState } from 'react'
import "./chatOnline.css"
import axios from 'axios';

const ChatOnline = ({onlineUsers, currentId, setCurrentChat}) => {
  const[friends, setFriends] = useState([]);
  const[onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async() =>{
      try{
        const res = await axios.get("/users/friends/" + currentId);
        setFriends(res.data);
      }catch(e){
        console.log(e);
      }
    }
    getFriends();
  },[])

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
  },[friends, onlineUsers])

  const handleClick = async(user) =>{
    try{
      const res = await axios.get(`/conversations/find/${currentId}/${user._id}`)
      setCurrentChat(res.data)
    }catch(e){
      console.log(e);
    }
  }


  return (
    <div className='chatOnline'>
    {onlineFriends.map((o,i) => ( 
        <div key={i} className='chatOnlineFriend' onClick={() => handleClick(o)}>
            <div className='chatOnlineImgContainer'>
                <img className='chatOnlineImg' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3iHndXR5tTsBpSeHQkHKHi&ust=1686143257335000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDAhKHbrv8CFQAAAAAdAAAAABAJ' alt=''/>
                <div className='chatOnlineBadge'></div>
            </div>
            <span className='chatOnlineName'> {o.username} </span>
        </div>
      ))
    }
    </div>
  )
}

export default ChatOnline