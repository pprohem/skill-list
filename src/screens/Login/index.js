import {View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";

import AuthContext from '../../Context/auth';
import {useNavigation} from "@react-navigation/native"



const Login = () => {
  const { loginContext } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
 
  const handleSignIn = async () => {
    if (username != "" && password != "") {
      loginContext(username, password);
    }
  };
  function handleLogin () {
    navigation.navigate("Home")
   }

 
   function handleRegister () {
    navigation.navigate("Cadastro")
   }

 

  return (

    <View style={styles.boxLogin}>
      <View style={styles.boxLogin}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        
        <TextInput 
        placeholder="username"
        placeholderTextColor="#333"
        onChangeText={setUsername}
        value={username}
        style={styles.input} />

        
        <TextInput 
        placeholder="password"
        placeholderTextColor="#333" 
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry={true}
         />

        <View>
          <TouchableOpacity onPress={handleLogin} style={styles.button} >
            <Text style={styles.textButton}>SIGN IN </Text>
          </TouchableOpacity>

          <Text onPress={handleRegister} style={styles.textCadastro}> Não possui cadastro? Cadastre-se!</Text>
        </View>
      </View>
      
        
    </View>
   
  );
}

export default Login;