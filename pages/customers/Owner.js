import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header'
import SearchBar from '../../components/customers/SearchBar'
import Prestataires from '../../components/customers/Prestataires'

const Owner = () => {
  return (
    <View>
      <Header/>
      <SearchBar/>
      <Prestataires/>
    </View>
  )
}

export default Owner