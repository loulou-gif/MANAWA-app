import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const StoreHeader = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/images/servicesBackgrounds/babershop.jpg")}/>
      <View>
        
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    image:{
        width:500,
        height:120
    }
})

export default StoreHeader