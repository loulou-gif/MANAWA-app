import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Store } from '../../data/Store.js'
const Prestataires = () => {
  return (
    <View>
        {Store.map((data) => (
          <View style={styles.flex} key={data.id}>
          <ImageBackground style={styles.imageSize} source={data.profil}/>
          <View>
            <Text style={styles.Title}>{data.title} </Text>
            <Text style={styles.details}>{data.description} </Text>
          </View>
        </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  imageSize:{
    height:50,
    width:50
  },
  Title:{
    fontSize:12,
    color:"black"
  },
  details:{
    color:"#ABA9A9",
    fontSize:9,
  },
  flex:{
    borderWidth:5
  }
})

export default Prestataires