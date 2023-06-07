import React from 'react'
import "./message.css";
import {format} from "timeago.js"

const Message = ({ message,own}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={ own ?  'message own' : 'message'}>
        <div className='messageTop'>
            <img
                className='messageImg'
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3iHndXR5tTsBpSeHQkHKHi&ust=1686143257335000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDAhKHbrv8CFQAAAAAdAAAAABAJ'
                alt=''
            />
            <p className='messageText'>{message.text}</p>


        </div>
        <div className='messageBottom'>
            {format(message.createdAt)}
        </div>
    </div>
  )
}

export default Message