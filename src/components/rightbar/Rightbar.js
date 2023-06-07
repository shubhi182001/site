import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const[friends, setFriends] = useState([]);
  const {user: currUser, dispatch} = useContext(AuthContext);
  const[followed , setFollowed] = useState();

  useEffect(() => {
    setFollowed(currUser.following.includes(user?._id))
  }, [user, currUser]) 

  useEffect(() => {
    const getFriends = async() => {
      try{
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data)
      }catch(e){
        console.log(e);
      }
    }
    getFriends();
  }, [user, currUser])

  const handleClick = async() => {
    try{
      if(followed){
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currUser._id
        })
        dispatch({type:"UNFOLLOW", payload: user._id})
      }else{
        await axios.put("/users/" + user._id + "/follow", {
          userId: currUser._id
        })
        dispatch({type:"FOLLOW", payload: user._id})
      }
    }catch(e) {
      console.log(e);
    }
    setFollowed(!followed) 
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      {user.username !== currUser.username && (
        <button className="rightbarfollowButton" onClick={handleClick}> 
          { followed ? "Unfollow" : "Follow"}
          { followed ? <RemoveIcon/> :<AddIcon/>  }
        </button>
      ) }
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship ===1? "Single" : user.relationship===2? "Married" : "N/A"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {
            friends ?
            friends.map(friend => (
              <Link key={friend._id} to={"/profile/" + friend.username} style={{textDecoration:"none"}}>
                <div className="rightbarFollowing">
                  <img
                    src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/1.jpeg"}
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">{friend.username}</span>
                </div>
              </Link>
            )):""
          }
          
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}