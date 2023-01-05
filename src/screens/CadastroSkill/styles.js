import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    
  
    containerCadastro:{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    flexDirection: "column",
    
    },
    
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 80
    },

    textLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
    },
    input: {
        borderBottomWidth: 1,
        height: 50,
        padding: 10,
        width: 300,
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        color: "#F6F6F6",
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
      iconSenha:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },

     hideOrShowPass: {
        display: "flex",
        flexDirection: "row"
     },

     errorMessage: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ff3700",
     }
});

