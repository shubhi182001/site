import React, { useContext, useEffect, useState } from 'react'
import "./post.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';


function Post({post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;  
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false)
    const  [user, setUser] = useState({}); 
    const {user: currUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    },[post.userId])

    useEffect(() => {
        setIsLiked(post.likes.includes(currUser._id))
    }, [currUser._id, post.likes])
    
    const likeCount = async() => {
        try{
           await axios.put("/posts/" + post._id+ "/like" , {userId: currUser._id})
        }catch(e){
            console.log(e);
        }
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                <img src={ user?.profilePicture? PF + user.profilePicture : PF+"person/1.jpeg"} alt="" className="postProfileImg" />
                
                </Link>
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