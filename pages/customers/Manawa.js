import { View, Text, Button } from 'react-native'
import React from 'react'

const Manawa = ({navigation}) => {
  return (
    <View>
      <Text>Manawa</Text>
      <Button title="Home" color="red" onPress={() => navigation.navigate('Login')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="MarketPlace" color="yellow" onPress={() => navigation.navigate('MarketPlace')} />
      <Button title="Signup" color="black" onPress={() => navigation.navigate('Signup')} />
    </View>
  )
}

export default Manawa