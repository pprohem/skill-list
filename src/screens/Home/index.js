import { styles } from "./styles";
import { useContext } from "react";
import {useNavigation} from "@react-navigation/native"
import {View, Text, TextInput, TouchableOpacity, Modal} from "react-native";
import Card from "../../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../Context/auth";

const Home = () => {
const { signOut} = useContext(AuthContext);
  const navigation = useNavigation();
       

  function handleCadastro () {
    navigation.navigate("CadastroSkill");
  }
   

  console.log(AsyncStorage.getItem("@user") )
  
    

   
   return (
        <View style={styles.containerHome}>
           
           
            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                <Text style={styles.buttonText}>
                    Nova Skill
                </Text>
              
            </TouchableOpacity>
            
            <TouchableOpacity onPress={signOut}style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Logout
                </Text>
            </TouchableOpacity>

            <Text style={styles.buttonText}>Skills do Usuario </Text>
            <Card />
        </View>
    )
   }

export default Home; 