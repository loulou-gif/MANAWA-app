import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

  return (
    <View>
      <Text>Home</Text>
      <Button title="Login" style={{ width: 10, height: 10 }}  onPress={() => navigation.push('Login')} />
      <Button title="Manawa" color="green" onPress={() => navigation.push('Manawa')} />
      <Button title="MarketPlace" color="yellow" onPress={() => navigation.push('marketplace')}/>
      <Button title="Signup" color="black" onPress={() => navigation.push('Signup')} />
      <Button title="Start" color="gray" onPress={() => navigation.push('Start')} />
    </View>
  )
}

export default Home