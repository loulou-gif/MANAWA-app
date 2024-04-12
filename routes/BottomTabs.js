import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Manawa from '../pages/customers/Manawa';
import Prestataires from '../pages/customers/Prestataires';
import Panier from '../pages/customers/Panier';
import Parametres from '../pages/customers/Parametres';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Manawa'  screenOptions={{headerShown: false}} activeColor="#fff" inactiveColor="#F8F7F7" barStyle={{ backgroundColor: '#47300D', height:80, borderTopEndRadius:50 }}>
        <Tab.Screen name='Manawa' component={Prestataires}/>
        <Tab.Screen name='Services' component={Manawa}/>
        <Tab.Screen name='Panier' component={Panier}/>
        <Tab.Screen name='Comptes' component={Parametres}/>
    </Tab.Navigator>
  )
}

export default BottomTabs