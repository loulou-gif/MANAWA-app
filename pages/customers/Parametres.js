import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header' 

const Parametres = () => {
  return (
    <View >
      <Header/>
      <View style={styles.body}>
        <View style={styles.circle}>
          <Text style={styles.initial}>JK</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name} >Julius Konan</Text>
          <Text style={styles.details} >ID Client: 5475623</Text>
          <Text style={styles.details} >Contact: +225 07 87 329 780 </Text>
        </View>
      </View>
      <View style={styles.settings}>
        <Text style={styles.menu_text}>Modifier mon compte</Text>
        <Text style={styles.menu_text}>Bonus et réductions</Text>
        <Text style={styles.menu_text}>Devenir Manawa</Text>
        <Text style={styles.menu_text}>Qui sommes nous?</Text>
        <Text style={styles.menu_text}>FAQ</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:"#7A4D09",
    // marginTop:50,
    // marginLeft:20,
  },
  initial:{
    fontSize:30,
    color:"#fff",
    textAlign:'center',
    // alignContent:'center',
    alignItems:'center',
    marginTop:30
  },
  body:{
    marginLeft:10,
    marginTop:100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info:{
    width:250,
    height:80,
    marginLeft:30,
    fontSize:50
  },
  name:{
    fontSize:30,
    color:"#47300D",
    marginBottom:5,
  },
  details:{
    fontSize:16,
    color:"#8C8B8B"
  },
  settings:{
    marginLeft:20,
    marginTop:30
  },
  menu_text:{
    fontSize:25,
    color:'#47300D',
    // height:21,
    marginTop:10,
    marginBottom:20
  }
})

export default Parametres