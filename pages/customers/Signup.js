import { View, Text,StyleSheet, Button, ImageBackground } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
  const image = require("../../assets/images/background/second.png");
  return (
    <View style={{}}>
      <ImageBackground source={image} style={{ width:"auto", height:800}} resizeMode="cover">
        <View style={styles.header}>
          <Text style={styles.inscriptionColor}>Inscription |</Text><Text style={styles.connexionColor}>Connexion</Text>
        </View>
        <View>
          <Text style={styles.p}>Eos suscipit nostrum in temporibus dolores ut natus saepe.</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 26,
    fontWeight:"bold",
  },
  inscriptionColor:{
    color: "#FFA012",
    fontSize: 26,
    fontWeight:"bold",
  },
  connexionColor:{
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight:"bold",
  },
  header:{
    marginTop: 80,
    alignContent:"center",
    justifyContent:"space-around",
    flexDirection:"row",
    width:290,
    height:30,
  },
  p:{
    width:290,
    height:30
  }

})


export default Signup