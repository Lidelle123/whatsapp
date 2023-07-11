//import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from "react-native";
import Interface from "./src/components/Interface.jsx";

const App = () => {
  return(
    <View style={styles.container}>
      <Interface/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
  }
})
        
export default App;