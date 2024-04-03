import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header.js'
import SearchBar from '../../components/customers/SearchBar.js'
import Services from '../../components/customers/Services.js'

const Manawa = ({navigation}) => {
  return (
    <View>
      <Header/>
      <SearchBar/>
      <Services/>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Manawa