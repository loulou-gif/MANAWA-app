import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header' 

const Parametres = () => {
  return (
    <View>
      <Header/>
      <View style={styles.circle}>
        <Text style={styles.initial}>JK</Text>
      </View>
      <Text>Comptes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:"#E520DD",
    marginTop:50,
    marginLeft:20,
  },
  initial:{
    fontSize:30,
    color:"#fff",
    textAlign:'center',
    // alignContent:'center',
    alignItems:'center',
    marginTop:30
  }
})

export default Parametres