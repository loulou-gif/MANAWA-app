import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header.js'
import SearchBar from '../../components/customers/SearchBar.js'
import Services from '../../components/customers/Services.js'
import Tabmenu from '../../components/customers/Tabmenu.js'
const Manawa = () => {
  return (
    <View>
      <Header/>
      <SearchBar/>
      <Services/>
      <Tabmenu/>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Manawa