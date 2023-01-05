import { styles } from "./styles";
import api from "../services/api";

import { useState, useEffect } from "react";
import {View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";


const Card = () => {
    const [skills, setSkills] = useState([])


    useEffect (() => {
        api.get("skills")
        .then((res) => {
            var getSkill = res.data 
            console.log(getSkill)
            setSkills(getSkill)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
    
        })
    }, []);


    function handleDeleteSkill(id) {
        api.delete(`skills/${id}`)
          .remove(id)
          .then((response) => {
          })
          .catch((error) => {
            console.log(error);
          });
      }
    

    return(
   
   <FlatList data={skills}  
    keyExtractor= {
        skills => skills.id
        
    }
   renderItem=
   {({item}) => 
   
   
   <View style={styles.Card}>
        
        <View> 
            <Image style={styles.viewImage} source={{uri:item.imageUrl}}></Image>
        </View>
        
        <View> 
            <Text style={styles.textCard}>Skill: {item.name}</Text>
            <Text style={styles.textCard}>Versão: {item.version}</Text>
            <Text style={styles.textCard}>Nível: {item.description}</Text>
        </View>
    </View>}
   
   />
   
   
)
}

export default Card 