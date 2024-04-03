import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header.js'
import SearchBar from '../../components/customers/SearchBar.js'

const Manawa = ({navigation}) => {
  return (
    <View>
      <Header/>
      <SearchBar/>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Manawa