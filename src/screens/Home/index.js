import { styles } from "./styles";
import {useNavigation} from "@react-navigation/native"
import {View, Text, TextInput, TouchableOpacity, Modal} from "react-native";
import Card from "../../components/Card";

const Home = () => {

  const navigation = useNavigation();


  function handleCadastro () {
    navigation.navigate("CadastroSkill");
  }
   
    
   
   
   return (
        <View style={styles.containerHome}>
           
           
            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                <Text style={styles.buttonText}>
                    Nova Skill
                </Text>
              
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Logout
                </Text>
            </TouchableOpacity>
            <Card />
        </View>
    )
   }

export default Home; 