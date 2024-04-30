import { View, Text} from "react-native";

export default function App() {
  return (
  <View
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"red",
  }}
  > 
    <Text style={{
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
    }}
    >Hello World</Text>
    
    <Text style={{
     paddingTop: 20,
     fontSize: 30,
     color: "yellow",
    }}
    >IDMO</Text>
  </View>
  );
   


}
