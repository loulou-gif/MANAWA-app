import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manawa from '../pages/customers/Manawa';
import MarketPlace from '../pages/customers/MarketPlace';
import Login from '../pages/customers/Login';
import Signup from '../pages/customers/Signup';
import Start from '../pages/customers/Start';
import Otpconnexion from '../pages/customers/Otpconnexion';
import Owner from '../pages/customers/Owner';
import Cost from '../pages/customers/Cost';
import Booking from '../pages/customers/Booking';
import Quickly from '../pages/customers/Quickly';
import Panier from '../pages/customers/Panier';
import Feedback from '../pages/customers/Feedback';

const NavMain = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name='Manawa' component={Manawa} />
            <Stack.Screen name='marketplace' component={MarketPlace} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Start' component={Start} />
            <Stack.Screen name='Otpconnexion' component={Otpconnexion} />
            <Stack.Screen name='Owner' component={Owner} />
            <Stack.Screen name='Cost' component={Cost}/>
            <Stack.Screen name='booking' component={Booking} />
            <Stack.Screen name='quickly' component={Quickly} />
            <Stack.Screen name='panier' component={Panier} />
            <Stack.Screen name='Feedback' component={Feedback} />
      </Stack.Navigator>
    )
}

export default NavMain