import React from 'react'
import "./closeFriends.css"

function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="error" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriends