import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Services = () => {
  return (
    <View>
      <View style={styles.center} >
        <ImageBackground style={styles.Card} >
        
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Card:{
    width:300,
    height:150,
    borderRadius:8,
    shadowColor:"black",
    boxShadow:5,
    backgroundColor:'red',
    marginTop:20,
    // alignContent:"center",
    // justifyContent:"center"
  },
  center:{
    alignItems:"center",
  }
})

export default Services