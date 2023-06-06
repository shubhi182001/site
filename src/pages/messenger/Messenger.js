import React from 'react'
import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

const Messenger = () => {
  return (
    <>
        <Topbar/>
        <div className='messenger'>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'>
                    <input placeholder='Search for Friends' className='chatMenuInput'/>
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                </div>
            </div>
            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                    <div className='chatBoxTop'>
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                    </div>
                    <div className='chatBoxBottom'>
                        <textarea className='chatMessageInput' placeholder='Write Something...'></textarea>
                        <button className='chatSubmitButton'>Send</button>
                    </div>
                </div>
            </div>
            <div className='chatOnline'>
                <div className='chatOnlineWrapper'>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Messenger