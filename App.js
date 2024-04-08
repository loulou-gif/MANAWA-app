import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CHome from './pages/customers/Home.js'
import Manawa from './pages/customers/Manawa.js'
import Start from './pages/customers/Start.js'
import Otpconnexion from './pages/customers/Otpconnexion.js'
import Signup from './pages/customers/Signup.js'
import Login from './pages/customers/Login.js'
import MarketPlace from './pages/customers/MarketPlace.js'
import Owner from './pages/customers/Owner.js'
import Cost from './pages/customers/Cost.js'
import Booking from './pages/customers/Booking.js'


const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={CHome} options={{ title: "My Home" }} />
            <Stack.Screen name='Manawa' component={Manawa} options={{ title: "Mes MANAWA"}}/>
            <Stack.Screen name='marketplace' component={MarketPlace} options={{ title: "Marketplace"}}/>
            <Stack.Screen name='Login' component={Login} options={{ title: "Login"}}/>
            <Stack.Screen name='Signup' component={Signup} options={{ title: "Signup"}}/>
            <Stack.Screen name='Start' component={Start} options={{ title: "Start"}}/>
            <Stack.Screen name='Otpconnexion' component={Otpconnexion} options={{ title: "Otpconnexion"}}/>
            <Stack.Screen name='Owner' component={Owner} options={{ title: "Owner"}}/>
            <Stack.Screen name='Cost' component={Cost} options={{ title: "Cost"}}/>
            <Stack.Screen name='Booking' component={Booking} options={{ title: "Booking"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
