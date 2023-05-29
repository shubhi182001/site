import React from 'react'
import "./closeFriends.css"

function CloseFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="sidebarFriend">
        <img src={PF+user.profilePicture} alt="error" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriends