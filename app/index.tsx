import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function App(){
  return(
    <View style={styles.container}>
      <Text>Quick Dose</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style= {{color: "blue"}}>Go to profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5c4a1",
    alignItems: "center",
    justifyContent: "center",
  }
});