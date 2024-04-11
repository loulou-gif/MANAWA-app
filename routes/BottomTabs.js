import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Manawa from '../pages/customers/Manawa';
// import MarketPlace from '../pages/customers/MarketPlace';
import Panier from '../pages/customers/Panier';
import Owner from '../pages/customers/Owner';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Manawa'  screenOptions={{headerShown: false}} activeColor="#fff" inactiveColor="#F8F7F7" barStyle={{ backgroundColor: '#47300D', height:80 }}>
        <Tab.Screen name='Services' component={Manawa}/>
        <Tab.Screen name='Manawa' component={Owner}/>
        <Tab.Screen name='Panier' component={Panier}/>
    </Tab.Navigator>
  )
}

export default BottomTabs