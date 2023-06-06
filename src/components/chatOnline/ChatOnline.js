import React from 'react'
import "./chatOnline.css"

const ChatOnline = () => {
  return (
    <div className='chatOnline'>
        <div className='chatOnlineFriend'>
            <div className='chatOnlineImgContainer'>
                <img className='chatOnlineImg' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3iHndXR5tTsBpSeHQkHKHi&ust=1686143257335000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDAhKHbrv8CFQAAAAAdAAAAABAJ' alt=''/>
                <div className='chatOnlineBadge'></div>
            </div>
            <span className='chatOnlineName'> Shubhi Kedia </span>
        </div>
    </div>
  )
}

export default ChatOnline