import { View, Text, Button} from 'react-native'
import React from 'react'

const MarketPlace = ({navigation}) => {
  return (
    <View>
      <Text>MarketPlace</Text>
      <Button title="Home" color="red"onPress={() => navigation.push('Home')} />
      <Button title="Login" onPress={() => navigation.push('Login')} />
      <Button title="Owner" color="green" onPress={() => navigation.push('Owner')} />
      <Button title="Signup" color="black" onPress={() => navigation.push('Signup')} />
    </View>
  )
}

export default MarketPlace