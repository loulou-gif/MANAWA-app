import {StyleSheet, View, Text,Button, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const Start = () => {
    const image = require("../../assets/images/first.png");
  return (
    <View style={{ backgroundColor: "#DE9F42" }}>
      <View>
        <ImageBackground source={image} style={{width: "auto", height: 800}} resizeMode="cover">
            <View style={{backgroundColor: '#47300D', width: 400, height: 200,borderRadius:150, marginLeft:-80, marginTop: -55 }}></View>
            <View style={{ backgroundColor: "#47300D", width:268, height:189,flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", alignItems:'center', marginTop: -5, borderTopRightRadius: 5060,borderBottomRightRadius: 5060}}>
                <Text style={styles.textStyle}>A CHACUN SON "MANAWA"</Text>
            </View>
            
            <View style={{ width:250, height:200, backgroundColor:"#47300D", borderRadius:50, borderRadius:150, marginLeft:-80, marginTop: -10 }}></View>
            <View style={{ width:200, height:200, backgroundColor:"#47300D", borderRadius:50, borderRadius:150, marginLeft:-80, marginTop: -10 }}></View>
            <View style={{backgroundColor: '#47300D', width: 50, height: 90, borderTopRightRadius:150, marginTop:-10, borderBottomRightRadius:100, marginLeft:-18 }}></View>
            {/* <View style={{backgroundColor: '#47300D', width: 300, height: 220,borderTopRightRadius:200, marginTop:-10, borderBottomRightRadius:100 }}></View> */}
            <View style={{width: "auto", height: 53, alignItems: "flex-end", margin: 30, marginTop: -80, }}>
                <Button title="COMMENCER          " color="#DE9F42" />
            </View>
        </ImageBackground>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    textStyle:{
        fontSize: 45,
        color: "#E5E5E5",
        marginLeft: 10,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
  });
export default Start