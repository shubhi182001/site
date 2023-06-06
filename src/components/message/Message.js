import React from 'react'
import "./message.css";

const Message = ({own}) => {
  return (
    <div className={ own ?  'message own' : 'message'}>
        <div className='messageTop'>
            <img
                className='messageImg'
                src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3iHndXR5tTsBpSeHQkHKHi&ust=1686143257335000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDAhKHbrv8CFQAAAAAdAAAAABAJ'
                alt=''
            />
            <p className='messageText'>Hello this is a message</p>


        </div>
        <div className='messageBottom'>
            1 hour ago
        </div>
    </div>
  )
}

export default Message