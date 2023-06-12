import axios from "axios";




export const loginCall = async(user, dispatch) => {
    const url = process.env.REACT_APP_URL
    dispatch( {type: "LOGIN_START"});
    try{
        const res = await axios.post(`${url}auth/login`, user);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch( err) {
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
} 