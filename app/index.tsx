import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

const [board,setBoard] = useState(Array(9).fill(null));
const [currentPlayer, setCurrentPlayer] = useState("x");
const [winner, setwinner] = useState(null);

    const handlePress = (index:number) => {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        
        setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
    }

    const cell= (index:number) =>{
        return(
        
          <TouchableOpacity style={style.cell} onPress={() => handlePress (index)}>
            <Text style={style.cellContent}>{board[index]}</Text>
          </TouchableOpacity>
    
        )
    }
  return (
    <View style={style.container}
    >
      <Text style ={style.title}>Jogo da Velha</Text>
      <Text>Vencedor</Text>
    

      <View>

        <View style={style.row}>
            {cell(0)}
            {cell(1)}
            {cell(2)}
        </View>
        

        
        <View style={style.row}>
            {cell(3)}
            {cell(4)}
            {cell(5)}
        </View>
        

        
        <View style={style.row}>
            {cell(6)}
            {cell(7)}
            {cell(8)}
       </View>
       </View>
       </View>
    
    );
}
  
        const style = StyleSheet.create({
        container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#89BBFE",

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
        borderColor:"#003459",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#A3D9FF",
    },
    cellContent:{
        fontSize:36,
        fontWeight:"bold",
    },
    
})
