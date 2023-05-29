import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"


function Feed() {

  const[posts, setPosts] = useState([]);
  const fetch = async() => {
    const res = await axios.get("posts/timeline/645c833be5ddcd39217f4f1f")
    console.log(res);
  }
  useEffect(() => {
    fetch();
  },[])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* {Posts.map(p => 
        (<Post key={p.id} post={p}/>)
        )} */}
      </div>
    </div>
  )
}

export default Feed