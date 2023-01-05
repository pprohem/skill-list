import {View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import api from '../../services/api'
import Icon from "react-native-vector-icons/Feather"


const Cadastro = () => { 

    const [showPass, setShowPass] = useState(true)
    const [showConfirmPass, setShowConfirmPass] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mensagem, setMensagem] = useState("");

    const registerUser = () => {
        if (password !== confirmPassword) {
          setMensagem("Senhas não conferem, favor conferir!")
          return;
        }
        
        const user = {
          login: username,
          password: password
        };
        api
          .post("/users", user)
          .then((res) => {
            console.log("ok", res.data);
            setMensagem("Usuario Cadastrado!")
            
          })
          .catch((err) => {
            console.log("not ok", err);
          });
      };





    return (
        <View style={styles.containerCadastro}>

            <Text style={styles.textTitle}> CADASTRO </Text>
        <View>
            <Text style={styles.textLabel}> USUARIO </Text>
            <TextInput 
             placeholder="Usuario"
            placeholderTextColor="#333"
            style={styles.input} 
            onChangeText={(e) => setUsername(e)}/>
        </View>

        <View>
            <View style={styles.hideOrShowPass}>
           
                <Text style={styles.textLabel}> SENHA </Text>
                <TouchableOpacity style={styles.iconSenha} onPress={() => setShowPass(!showPass)}>
                    {showPass ?
                        <Icon name="eye" size={20} color="#FFF" />
                        :
                        <Icon name="eye-off" size={20} color="#FFF" />
                    }
                </TouchableOpacity>
            </View>
        
            <TextInput 
            placeholder="Senha"
            placeholderTextColor="#333"
            style={styles.input}
            secureTextEntry={showPass} 
            onChangeText={(e) => setPassword(e)}/>

        </View>

        
        <View>
           <View style={styles.hideOrShowPass}> 
                <Text style={styles.textLabel}> CONFIRME SUA SENHA </Text>
                <TouchableOpacity style={styles.iconSenha} onPress={() => setShowConfirmPass(!showConfirmPass)}>
                    {showConfirmPass ?
                        <Icon name="eye" size={20} color="#FFF" />
                        :
                        <Icon name="eye-off" size={20} color="#FFF" />
                    }
                </TouchableOpacity>
            </View>
            <TextInput 
            placeholder="Confirme sua senha"
            placeholderTextColor="#333"
            style={styles.input} 
            secureTextEntry={showConfirmPass}
            onChangeText={(e) => setConfirmPassword(e)}/>
        </View>
           <Text style={styles.errorMessage}>{mensagem}</Text>
          <TouchableOpacity  onPress={() => registerUser()} style={styles.button} >
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
      
        </View>
    )
}
export default Cadastro; 