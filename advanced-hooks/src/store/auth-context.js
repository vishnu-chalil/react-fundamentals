import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogIn: (email,password) => {},
});

export const AuthContextProvider = (props) => {


  useEffect(() => {
    const storedUserLogin = localStorage.getItem("isLoggedIn");
    if (storedUserLogin === "1") {
      setIsLoggedIn(true);
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const loginHandler = (email,password) => {
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
