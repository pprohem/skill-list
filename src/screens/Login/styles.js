import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    
  
    boxLogin:{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    
    alignItems: "center",
    },
     
    title: {
      padding: "3%",
      color: "#ffffff",
      fontSize: 30,
      marginBottom: 7.5,
    },
  
    input: {
      borderBottomWidth: 1,
      height: 50,
      padding: 10,
      width: 260,
      marginBottom: 10,
      marginTop: 10,
      fontSize: 20,
      color: "#f7f7f7",
      backgroundColor: "#1E232E"
    },
  
    button: {
      backgroundColor: "#ff3700",
      justifyContent: "center",
      alignItems: "center",
      width: 260,
      borderRadius: 9,
      paddingVertical: 10,
      marginTop: 25,
    },

    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },

    textCadastro: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#ff3700",
        marginTop: 30
    },

    viewTitle: {
      width: 150,
      marginLeft: 50
    }

  });