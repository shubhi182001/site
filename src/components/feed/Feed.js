import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"


function Feed({username}) {

  const[posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
  
  const [refresh , setRefresh ] =useState(false);

  useEffect(() => {
    const fetch = async() => {
      const res = username ?  await axios.get("/posts/profile/" + username) : await axios.get(`posts/timeline/${user._id}`)
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    }
    fetch();
  },[username, user._id, refresh])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        { (!username ||  username === user.username) && <Share/>}
        {posts.map(p => 
        (<Post key={p._id} post={p} refresh = {refresh}  setRefresh = {setRefresh} />)
        )}
      </div>
    </div>
  )
}

export default Feed