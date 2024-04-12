import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Manawa from '../pages/customers/Manawa';
import Prestataires from '../pages/customers/Prestataires';
import Panier from '../pages/customers/Panier';
import Parametres from '../pages/customers/Parametres';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Manawa' screenOptions={{headerShown: false}} tabBarBadgeStyle="#DE9F42" activeColor="#7A4D09" inactiveColor="#fff" barStyle={{ backgroundColor: '#AB6E12', height:80, borderTopEndRadius:50 }}>
        <Tab.Screen name='Manawa' component={Prestataires} options={{ tabBarIcon: () => (  <MaterialCommunityIcons name='room-service' color="#7A4D09" size={26} /> ),}}/>
        <Tab.Screen name='Services' component={Manawa}  options={{ tabBarIcon: () => (  <Icon name="wrench" color="#7A4D09" size={26} /> ),}}/>
        {/* <Tab.Screen name='Message' component={Manawa}/> */}
        <Tab.Screen name='Panier' component={Panier}  options={{ tabBarIcon: () => (  <Icon name="shopping-cart" color="#7A4D09" size={26} /> ),}}/>
        <Tab.Screen name='Comptes' component={Parametres}  options={{ tabBarIcon: () => (  <Icon name="user" color="#7A4D09" size={26} /> ),}}/>
    </Tab.Navigator>
  ) 
}

export default BottomTabs