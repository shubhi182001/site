import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"


function Feed({username}) {

  const[posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
  
  useEffect(() => {
    const fetch = async() => {
      const res = username ?  await axios.get("/posts/profile/" + username) : await axios.get(`posts/timeline/${user._id}`)
      setPosts(res.data);
    }
    fetch();
  },[username, user._id])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(p => 
        (<Post key={p._id} post={p}/>)
        )}
      </div>
    </div>
  )
}

export default Feed