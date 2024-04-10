import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Manawa from '../pages/customers/Manawa';
import MarketPlace from '../pages/customers/MarketPlace';
import Panier from '../pages/customers/Panier';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} activeColor="#F8F7F7" inactiveColor="#F8F7F7" barStyle={{ backgroundColor: '#47300D' }}>
        <Tab.Screen name='Manawa' component={Manawa}/>
        <Tab.Screen name='marketplace' component={MarketPlace}/>
        <Tab.Screen name='panier' component={Panier}/>
    </Tab.Navigator>
  )
}

export default BottomTabs