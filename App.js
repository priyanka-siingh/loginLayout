import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.image} source={require("./assets/logo.png")}></Image>
      </View>
      <View style={styles.field}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput style={styles.TextInput}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.TextInput}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.TextInput}></TextInput>
      </View>
      <View>
      <TouchableOpacity>
          <Text style={{ justifyContent:"center",color:"#a8a8a8" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginbtn}>
        <TouchableOpacity>
          <Text style={{ margin: 10,color:"#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    fontFamily: "Roboto",
    color:"#a8a8a8"
    
  },
 
  image: {
    height:250,
    width:100,
    marginBottom: 20
  },

  field: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    marginLeft: 50,
    marginBottom: 15,
    

  },
  
  text:{
    color:"#a8a8a8"
  },

  TextInput: {
    height: 40,
    width: "90%",
    backgroundColor: "#f8f8f9",
    borderRadius: 10,
    padding: 5
  },


  loginbtn: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#5597cf",
    borderRadius: 10,
    height: 40,
    width: "95%",
    marginLeft: 5,
    marginTop: 150
  }
});
