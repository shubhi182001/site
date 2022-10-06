import React, { useState } from 'react'
import "./post.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Users} from "../../dummyData"

function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false)
    const likeCount = () => {
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVertOutlinedIcon/>
            </div>
        </div>
        <div className="postCenter">
            {post.desc?
            <span className="postText">{post.desc}</span>
            :null
        }
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                {/* <img src="assets/like.png" alt="" className="likeIcon" onClick={likeCount} /> */}
                <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeCount} />
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