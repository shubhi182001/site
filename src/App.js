import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login"
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home/>: <Register/>}/>
        <Route path="/login" element={user? <Navigate replace to="/" /> :<Login/>}/>
        <Route path="/register" element={user? <Navigate replace to="/" /> :<Register/>}/>
        <Route path="/messenger" element={!user? <Navigate replace to="/" /> :<Messenger/>}/>
        <Route path="/profile/:username" element={user? <Profile/> : <Navigate replace to="/login"/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
