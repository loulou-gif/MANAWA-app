import { View, Text, Pressable, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header.js'
import SearchBar from '../../components/customers/SearchBar.js'
// import Services from '../../components/customers/Services.js'
// import Tabmenu from '../../components/customers/Tabmenu.js'
import { services } from '../../data/services'
const Manawa = ({navigation}) => {
  return (
    <View>
      <Header/>
      <SearchBar/>
      <View style={styles.center} >
        {services.map((data) =>(
          <ImageBackground key={data.id}  style={styles.Card} source={data.image}>
              <Pressable onPress={() => navigation.navigate("Owner")}>
                <View style={styles.titleBox}>
                    <Text  style={styles.title} >{data.name}</Text>
                </View>
              </Pressable>
          </ImageBackground>
        ))}
      </View>
      {/* <Tabmenu/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Card:{
    width:300,
    height:150,
    borderRadius:8,
    shadowColor:"black",
    boxShadow:20,
    // backgroundColor:'black',
    resizeMode:"cover",
    marginTop:20,
    // alignContent:"center",
    // justifyContent:"center"
  },
  center:{
    alignItems:"center",
  },
  title:{
    fontSize:20,
    color:"#fff",
    marginLeft: 10
  },
  titleBox:{
    justifyContent:"center",
    backgroundColor:"#F3F3F3",
    opacity: 0.6,
    width:300,
    height:40,
    marginTop:110,
    borderBottomEndRadius:8

  }
})

export default Manawa