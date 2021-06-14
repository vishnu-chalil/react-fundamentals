import React, { useCallback, useEffect } from "react";
import { useState } from "react";


let logoutTimer; 
const AuthContext = React.createContext({

    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
    

});


const calculateRemainingTime = (expirationTime)=>{

    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remaingingTime = adjExpirationTime - currentTime;
    
    return remaingingTime;
};


const retrieveStoredToken =()=>{

    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    let remaingingTime = calculateRemainingTime(storedExpirationDate);
    if(remaingingTime <= 60000 ){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return  {token: storedToken,
    duration: remaingingTime};

};

export const AuthContextProvider = (props)=>{

    const tokenData = retrieveStoredToken(); 

    let initialToken;

    if(tokenData){

        initialToken = tokenData.token;

    }

    const [token,setToken] = useState(initialToken);
    const userIsLoggedIn =  !!token;
    
    const loginHandler = (token,expirationTime)=>{

        setToken(token);
        localStorage.setItem('token',token);
        localStorage.setItem('expirationTime', expirationTime);

        const remaingingTime = calculateRemainingTime(expirationTime);
        logoutTimer =  setTimeout(logoutHandler,remaingingTime);


    }
    const logoutHandler = useCallback(()=>{
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutHandler){

            clearTimeout(logoutTimer);
        }
    },[]);

    useEffect(()=>{

        if(tokenData){
            logoutTimer = setTimeout(logoutHandler,tokenData.duration);
        }
    },[tokenData,logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout:logoutHandler
    };




    return<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
     
};

export default AuthContext;