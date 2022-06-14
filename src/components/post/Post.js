import React from 'react'
import "./post.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Post() {
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Jane</span>
                <span className='postDate'>5 mins ago</span>
                
            </div>
            <div className="postTopRight">
                <MoreVertOutlinedIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! it's my social media app</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="likeCounter"> 32 people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Post