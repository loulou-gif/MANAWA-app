import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CHome from './pages/customers/Home.js'
import Manawa from './pages/customers/Manawa.js'
import Start from './pages/customers/Start.js'
import Otpconnexion from './pages/customers/Otpconnexion.js'
import Signup from './pages/customers/Signup.js'
import Login from './pages/customers/Login.js'
import MarketPlace from './pages/customers/MarketPlace.js'
import Owner from './pages/customers/Owner.js'
import Cost from './pages/customers/Cost.js'
import Booking from './pages/customers/Booking.js'
import quickly from './pages/customers/Quickly.js'
import Panier from './pages/customers/Panier.js'
import Feedback from './pages/customers/Feedback.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from './routes/BottomTabs.js';
// import Parametres from './pages/customers/Parametres.js';


const App = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Manawa' screenOptions={{headerShown: false}}>
            <Stack.Screen name='tabs' component={BottomTabs}  />
            {/* <Stack.Screen name='Manawa' component={Manawa} />
            <Stack.Screen name='marketplace' component={MarketPlace} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Start' component={Start} />
            <Stack.Screen name='Otpconnexion' component={Otpconnexion} />
            <Stack.Screen name='Owner' component={Owner} />
            <Stack.Screen name='Cost' component={Cost}/>
            <Stack.Screen name='booking' component={Booking} />
            <Stack.Screen name='quickly' component={quickly} />
            <Stack.Screen name='panier' component={Panier} />
            <Stack.Screen name='Feedback' component={Feedback} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
