import React, { useEffect, useState } from 'react'
import "./post.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import axios from "axios"
import {format} from "timeago.js"


function Post({post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;  
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false)
    const  [user, setUser] = useState({}); 

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    },[post.userId])

    const likeCount = () => {
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={user.profilePicture || PF+"person/1.jpeg"} alt="" className="postProfileImg" />
                <span className="postUsername">{user.username}</span>
                <span className='postDate'>{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVertOutlinedIcon/>
            </div>
        </div>
        <div className="postCenter">
            {post.desc?
            <span className="postText">{post?.desc}</span>
            :null
        }
            <img src={PF+post?.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeCount} />
                <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeCount} />
                <span className="likeCounter"> {like} people loved it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Post