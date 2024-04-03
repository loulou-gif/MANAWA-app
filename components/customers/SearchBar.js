import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.centre} >
        <TextInput style={styles.input} placeholder='Recherche...' />
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
      width: 300,
      height:50,
      paddingLeft: 30,
      borderRadius:8,
      borderStyle: "solid",
      borderColor: 'gray',
      borderWidth:1
    },
    centre:{
      alignItems:"center",
      marginTop: 50,
    }
  })

export default SearchBar