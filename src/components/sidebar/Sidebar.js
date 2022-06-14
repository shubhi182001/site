import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


function Sidebar() {
  return (
    <>
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className='sidebarList'>
              <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Feed</span>
              </li>
              <li className="sidebarListItem">
                <ChatIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Chat</span>
              </li>
              <li className="sidebarListItem">
                <PlayCircleIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Videos</span>
              </li>
              <li className="sidebarListItem">
                <GroupsIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Groups</span>
              </li>
              <li className="sidebarListItem">
                <BookmarkIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Bookmark</span>
              </li>
              <li className="sidebarListItem">
                <HelpIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Questions</span>
              </li>
              <li className="sidebarListItem">
                <WorkIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Jobs</span>
              </li>
              <li className="sidebarListItem">
                <EventIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Events</span>
              </li>
              <li className="sidebarListItem">
                <SchoolIcon className='sidebarIcon'/>
                <span className='sidebarListItemText'>Courses</span>
              </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="error" className="sidebarFriendImg" />
              <span className="sidebarFriendName">JaneDoe</span>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar