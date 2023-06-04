import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { Link } from "react-router-dom";
import {useContext, useRef} from "react"
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const{user, isFetching,  dispatch} = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value, password: password.current.value},
        dispatch
    )
  }
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CircleUp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on CircleUp.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
            <input placeholder="Password" type="password" className="loginInput"  ref={password} required minLength="6"/>
            <button className="loginButton" type= "submit" disabled={isFetching}>{ isFetching ? <CircularProgress color="white" size="20px"/> :"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
          </form>
          <Link to="/register">
            <button className="loginRegisterButton" >
              Create a New Account
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}