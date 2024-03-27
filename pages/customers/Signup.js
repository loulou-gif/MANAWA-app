import { View, Text, Button } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Home" color="red"onPress={() => navigation.push('Home')} />
      <Button title="Login" onPress={() => navigation.push('Login')} />
      <Button title="Manawa" color="green" onPress={() => navigation.push('Manawa')} />
      <Button title="MarketPlace" color="yellow" onPress={() => navigation.push('marketplace')}/>
    </View>
  )
}

export default Signup