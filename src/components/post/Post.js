import React, { useContext, useEffect, useState } from "react";
import "./post.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Post({ post, refresh, setRefresh }) {
  const [delSucc, setDelSucc] = useState(false);
  const { user: currUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const fetchUser = async () => {
    const res = await axios.get(`/users?userId=${post.userId}`);
    setUser(res.data);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleCloseDelete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDelSucc(false);
  };

  const deletePost = async (req, res) => {
    await axios
      .delete("/posts/" + post._id, { data: { userId: currUser._id } })
      .then((res) => {
        if (res.status == 200) {
          setDelSucc(true);
          setRefresh(!refresh);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(currUser._id));
  }, [currUser._id, post.likes]);

  const likeCount = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", { userId: currUser._id });
    } catch (e) {
      console.log(e);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <Snackbar
        open={delSucc}
        autoHideDuration={6000}
        onClose={handleCloseDelete}
      >
        <Alert
          onClose={handleCloseDelete}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post is deleted Successfully !
        </Alert>
      </Snackbar>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/1.jpeg"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          {(currUser._id === post.userId)  &&  
          (<div className="postTopRight">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={()=>handleClose}>
                <span onClick={deletePost}>
                    Delete

                </span>
                
            </MenuItem>
            </Menu>
          </div>)
        }
        </div>
        <div className="postCenter">
          {post.desc ? <span className="postText">{post?.desc}</span> : null}
          <img src={PF + post?.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              alt=""
              className="likeIcon"
              onClick={likeCount}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="likeIcon"
              onClick={likeCount}
            />
            <span className="likeCounter"> {like} people loved it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
