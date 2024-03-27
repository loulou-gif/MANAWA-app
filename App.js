import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CHome from './pages/customers/Home.js'
import Manawa from './pages/customers/Manawa.js'
import Signup from './pages/customers/Signup.js'
import Login from './pages/customers/Login.js'
import MarketPlace from './pages/customers/MarketPlace.js'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={CHome} />
            <Stack.Screen name='Manawa' component={Manawa}/>
            <Stack.Screen name='marketplace' component={MarketPlace}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
