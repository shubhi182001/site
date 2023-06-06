import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"645c833be5ddcd39217f4f1f",
        username:"shubhi",
        email:"shubhi@gmail.com",
        profilePicture:"person/3.jpeg",
        coverPicture:"",
        followers:[],
        following:[],
        isAdmin:false,
        city:"Agra",
        from:"Nainital",
        relationship:"1"
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return(
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}