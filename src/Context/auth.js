import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native"



const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);


    useEffect(() => {
    api.get("users").then(users => {
     setUsers(users);
     console.log(users)
    })
}, [])   

    function signIn(username, password) {
        users?.data.find(user => {
            if(username !== "" && password !== "") {
                if (user.login === username && user.password === password) {
                    AsyncStorage.setItem("@authenticated", true);
                    AsyncStorage.setItem("@id", user.id);
                    AsyncStorage.setItem("@user", user.login);
                    AsyncStorage.setItem("@password", user.password);
                    setIsAuthenticated(true); 
                    setUsername(user.login);
                    navigation.navigate("Home")
            }
            
           
            }
        })
     }

     const signOut = () => {
        setIsAuthenticated(false);
        setUserId(""); 
        AsyncStorage.removeItem("id");
        AsyncStorage.removeItem("@authenticated");
        AsyncStorage.removeItem("@id");
        navigation.navigate("Login")
     

       
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
                
            }}
        >
            {children}
        </AuthContext.Provider>
         
        </>

    );
};
export default AuthContext;