import { View, Text , Button} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Home" color="red"onPress={() => navigation.push('Home')} />
      <Button title="Manawa" color="green" onPress={() => navigation.push('Manawa')} />
      <Button title="MarketPlace" color="yellow" onPress={() => navigation.push('marketplace')}/>
      <Button title="Signup" color="black" onPress={() => navigation.push('Signup')} />
    </View>
  )
}

export default Login