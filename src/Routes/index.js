import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack";
import { AuthProvider } from "../Context/auth";

 export  const Routes =() => {
    return(
        <NavigationContainer>
            <AuthProvider>

            
            <StackRoutes/>
            </AuthProvider>
        </NavigationContainer>
    )
 }