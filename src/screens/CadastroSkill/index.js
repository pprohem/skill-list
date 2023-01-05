import {View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import api from '../../services/api'


const CadastroSkill = () => { 


    const [skillId, setSkillId] = useState("");
    const [level, setLevel] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [skills, setSkills] = useState([]);

    function handleDate (number) {
      if ( number < 10 ) {
        return "0" + number; 
      }
      return number; 
    }


    const registerUser = () => {
      var userMockado = 10129
      var data = new Date()
      var dataFormatada = `${data.getFullYear()}-${handleDate(data.getMonth()+1)}-${handleDate(data.getDate())}`
  
        const postSkill = {
          knowledgeLevel: level,
          skill: sele,
          user : userMockado,
          createdAt: dataFormatada,
          updatedAt: dataFormatada
        };
        api
          .post("/userSkills", postSkill)
          .then((res) => {
            console.log("ok", res.data);
            setMensagem("Skill Cadastrado!")
            
          })
          .catch((err) => {
            console.log("not ok", err);
            console.log(skillId)
            console.log(level)
            console.log(dataFormatada)
          });
      };

      useEffect (() => {
        api.get("skills")
        .then((res) => {
            var getSkill = res.data.map(data => ({
          value: data.id, label: data.name
        }));  
            console.log(getSkill)
            setSkills(getSkill)
            
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
    
        })
    }, []);


    console.log(skills)


    return (
        <View style={styles.containerCadastro}>

            <Text style={styles.textTitle}> NOVASKILL </Text>
        <View>
            <Text style={styles.textLabel}> NIVEL DE CONHECIMENTO </Text>
            <TextInput 
             placeholder="Usuario"
            placeholderTextColor="#333"
            style={styles.input} 
            onChangeText={(e) => setLevel(e)}/>

        <TextInput 
             placeholder="Usuario"
            placeholderTextColor="#333"
            style={styles.input} 
            onChangeText={(e) => setSkillId(e)}/>
        </View>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 300, background: "#1E232E", color: "#FFF" }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
          <Picker.Item label={skills.label} value={skills.value} />
      </Picker>


    
           <Text style={styles.errorMessage}>{mensagem}</Text>
          <TouchableOpacity  onPress={() => registerUser()} style={styles.button} >
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
      
        </View>
    )
}
export default CadastroSkill; 