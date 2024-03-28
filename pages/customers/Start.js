import {StyleSheet, View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Start = () => {
    const image = require("../../assets/images/first.png");
  return (
    <View style={{ backgroundColor: "#47300D" }}>
      <View>
        <ImageBackground source={image} style={{width: "auto", height: 800}} resizeMode="cover">
            <View style={{backgroundColor: '#DE9F42', width: 200, height: 200,borderRadius:150, marginLeft:-80, marginTop: -55 }}></View>
            <View style={{ width:300, height:300,flexDirection: 'row', flexWrap: 'wrap', flex:1, justifyContent: "center", alignItems:'center'}}>
                <Text style={styles.textStyle}>A CHACUN SON "MANAWA"</Text>
            <View style={{ width:50, height:50, backgroundColor:"#DE9F42", borderRadius:50}}></View>
            </View>
            <View style={{ width:200, height:200, backgroundColor:"#DE9F42", borderRadius:200, marginBottom: -100,  }}></View>
            {/* <View style={{backgroundColor: '#47300D', width: 200, height: 200, borderTopRightRadius:150, marginTop:-10, borderBottomRightRadius:100 }}></View>
            <View style={{backgroundColor: '#47300D', width: 300, height: 220,borderTopRightRadius:200, marginTop:-10, borderBottomRightRadius:100 }}></View> */}
            {/* <View style={{backgroundColor: '#47300D', width: 400, height: 250, borderTopRightRadius:250, marginTop:-10, borderBottomRightRadius:100}}></View> */}
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