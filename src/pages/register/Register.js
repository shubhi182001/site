import { useRef } from "react";
import "./register.css";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick =async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Password don't match")
    }else{
      const user = {
        username : username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user)
        navigate("/login");
      }catch(e){
        console.log(e);
      }

    }
  }


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
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" className="loginInput" required ref={username} />
            <input placeholder="Email" className="loginInput" type="email" required ref={email} />
            <input placeholder="Password" className="loginInput" required type="password" ref={password} />
            <input placeholder="Password Again" className="loginInput" required type="password" ref={passwordAgain} />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to="/login">
              <button className="loginRegisterButton" >
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}