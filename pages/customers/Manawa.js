import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Manawa = ({navigation}) => {
  return (
    <View>
      <View style={styles.centre} >
        <TextInput style={styles.input} placeholder='Recherche ...' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width: 300,
    height:50,
    backgroundColor:"#E5E5E5",
    paddingLeft: 30,
    borderRadius:8
  },
  centre:{
    alignItems:"center",
    marginTop: 50,
  }
})

export default Manawa