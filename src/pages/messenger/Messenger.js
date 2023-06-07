import React, { useContext, useEffect, useRef, useState } from 'react'
import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { AuthContext } from '../../context/AuthContext'
import axios from "axios"
import {io} from "socket.io-client"
const Messenger = () => {
    const [ conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [ messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender:data.senderId,
                text: data.text,
                createdAt: Date.now(),

            })
        })
    },[])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", users => {
            setOnlineUsers(user.following.filter(f => users.some(u => u.userId === f)))
        })
    },[user])

 
    useEffect(() => {
        const getConv = async() => {
            try{
                const res = await axios.get("/conversations/" + user._id)
                setConversations(res.data);
            }catch(e){
                console.log(e);
            }
        }
        getConv();
    },[user])
 
useEffect(() => {

    const getMessages = async() => {
        try{
            const res = await axios.get("/messages/" + currentChat?._id)
            setMessages(res.data);
            
        }catch(e){
            console.log(e);
        }
    }
    getMessages();

}, [currentChat])

const handleSubmit = async(e) => {
    e.preventDefault();
    const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id
    };

    const receiverId = currentChat.members.find(member => member!==user._id);

    socket.current.emit("sendMessage", {
        senderId:user._id,
        receiverId,
        text: newMessage
    })

    try{
        const res = await axios.post("/messages", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
    }catch(e){
        console.log(e);
    }

} 
useEffect(() => {
    scrollRef.current?.scrollIntoView({behaviour:"smooth"})
}, [messages])

  return (
    <>
        <Topbar/>
        <div className='messenger'>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'>
                    <input placeholder='Search for Friends' className='chatMenuInput'/>
                    {
                        conversations.map((c) => (
                            <div key={c._id} onClick={() =>setCurrentChat(c)}>
                                <Conversations  conversation = {c} currUser= {user}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                    {currentChat?  
                    <>
                    <div className='chatBoxTop'>
                        {
                            messages && messages.map(m => (
                                <div key={m._id}  ref={scrollRef}>
                                    <Message  message={m} own = {m.sender === user._id}/>
                                </div>

                            ))
                        }
                        
                    </div>
                    <div className='chatBoxBottom'>
                        <textarea className='chatMessageInput' placeholder='Write Something...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)  }></textarea>
                        <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                    </div> 
                    </> : <span className='noConversationText'>
                        Open a conversation to start a chat.
                    </span>
                }
                </div>
            </div> 
            <div className='chatOnline'>
                <div className='chatOnlineWrapper'>
                    <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}/>
                    
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Messenger