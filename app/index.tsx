import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const nome = "Maria";
    const cell= () =>{
        return(
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        )
    }
  return (
    <View style={style.container}
    >
      <Text>"Jogo da Velha</Text>
      <Text>Vencedor</Text>

      <View>
        <View>
            {cell()}
            {cell()}
            {cell()}
        </View>
        </View>

        <View>
        <View>
            {cell()}
            {cell()}
            {cell()}
        </View>
        </View>

        <View>
        <View>
            {cell()}
            {cell()}
            {cell()}
        </View>
        </View>

        <View>
        <View>
            {cell()}
            {cell()}
            {cell()}
            </View>
        </View>

        <View>
        <View>
            {cell()}
            {cell()}
            {cell()}
        </View>
        </View>

        <View>
            {cell()}
            {cell()}
            {cell()}
        </View>

    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A8C686",

    },

    title: {
        fontSize:24,
        fontWeight:"bold",
        marginBottom:20,
    },

    status:{
        fontSize:18,
        marginBottom:20,
    },
    
    board:{
        marginBottom:20,
    },
    row:{
        flexDirection:"row",
    },
    cell:{
        width:80,
        height:80,
        borderWidth:2,
        borderColor:"#",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"",
    },
    cellContent:{
        fontSize:36,
        fontWeight:"bold",
    },
    
})
