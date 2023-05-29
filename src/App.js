import Home from "./pages/home/Home";
import Login from "./pages/Login/Login"
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
