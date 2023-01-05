import React, { createContext, useEffect, useState } from "react";
import userService from "../services/request/userService";



const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
   
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);


    useEffect(() => {
    userService.getAll().then(users => {
     setUsers(users);
    })
}, [])   

    function signIn(username, password) {
        users?.data.find(user => {
            
            if(username !== "" && password !== "") {
                if (user.login === username && user.password === password) {
                    localStorage.setItem("@authenticated", true);
                    localStorage.setItem("@id", user.id);
                    localStorage.setItem("@user", user.login);
                    localStorage.setItem("@password", user.password);
                    setIsAuthenticated(true); 
                    setUsername(user.login);
                    
            }
            
           
            }
        })
     }

     const signOut = () => {
        setIsAuthenticated(false);
        setUserId(""); 
        localStorage.removeItem("id");
        localStorage.removeItem("@authenticated");
        localStorage.removeItem("@id");
     

       
    }
          
    return (
        <> 
         <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userId,
                username,
                password
            }}
        >
            {children}
        </AuthContext.Provider>
         <ToastContainer />
        </>

    );
};
export default AuthContext;