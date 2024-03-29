import {StyleSheet, View, Text,Button, ImageBackground } from 'react-native'
import React from 'react'

const Start = () => {
    const image = require("../../assets/images/first.png");
  return (
    <View style={{ backgroundColor: "#DE9F42" }}>
      <View>
        <ImageBackground source={image} style={{width: "auto", height: 800}} resizeMode="cover">
            <View style={{backgroundColor: '#47300D', width: 200, height: 200,borderRadius:150, marginLeft:-80, marginTop: -55 }}></View>
            <View style={{ width:300, height:300,flexDirection: 'row', flexWrap: 'wrap', flex:1, justifyContent: "center", alignItems:'center'}}>
                <Text style={styles.textStyle}>A CHACUN SON "MANAWA"</Text>
            <View style={{ width:50, height:50, backgroundColor:"#47300D", borderRadius:50, margin:5}}></View>
            </View>
            <View style={{ width:200, height:200, backgroundColor:"#47300D", borderRadius:200, marginBottom: -100, marginLeft:-50  }}></View>
            {/* <View style={{backgroundColor: '#47300D', width: 200, height: 200, borderTopRightRadius:150, marginTop:-10, borderBottomRightRadius:100 }}></View>
            <View style={{backgroundColor: '#47300D', width: 300, height: 220,borderTopRightRadius:200, marginTop:-10, borderBottomRightRadius:100 }}></View> */}
            <View style={{width: "auto", height: 53, alignItems: "flex-end", margin: 30}}>
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