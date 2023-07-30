//import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet,View } from "react-native";
import Interface from "./src/components/Interface.jsx";

const App = () => {
  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
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