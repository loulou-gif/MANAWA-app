import { View, Text, TextInput,StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../../components/customers/Header'
import DatePicker from 'react-native-date-picker'
import Panier from './Panier'

const Booking = ({navigation}) => {
  return (
    <View>
      <Header/>
      <Image style={styles.image} source={require('../../assets/images/Profils/p10.jpg')}/>
      <View style={styles.center} >
        <View style={styles.flex} >
            <Text style={styles.activeText} >Réservation</Text>
            <Text style={styles.text} onPress={() => navigation.push('quickly')}>Instantanée</Text>
        </View>
        <View style={styles.bloc} >
            <TextInput style={styles.day} placeholder='JJ/MM/AAAA'  />
            <View style={styles.flex} >
                <TextInput style={styles.hour} placeholder='-- / --'  />
                <TextInput style={styles.hour} placeholder='-- / --' editable={false} selectTextOnFocus={false}  />
            </View>
            <TextInput style={styles.day} placeholder='Service(s)' />
            <TextInput style={styles.day} placeholder='Coût totale' />
            <Pressable style={styles.bouton} onPress={() => navigation.push('panier')} >
                <Text style={styles.value} >Ajouter au panier</Text>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    title:{

    },
    day:{
        textAlign:"center",
        borderWidth:1,
        borderColor:'#ABA9A9',
        width:250,
        height:50,
        borderRadius:8,
        marginTop:5,
        marginBottom:10,
    },
    hour:{
        textAlign:"center",
        borderWidth:1,
        borderColor:'#ABA9A9',
        width:120,
        height:50,
        borderRadius:8,
        marginBottom:10,
    },
    flex:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    bloc:{
        width:250,
        height:230,
        marginTop:30
    },
    center:{
        alignItems:"center",
        marginTop:40
    },
    activeText:{
        margin:10,
        fontSize: 25,
        color:'#FFA012',
        borderBottomWidth:3,
        borderColor:'#FFA012'
    }, 
    text:{
        margin:10,
        fontSize: 25,
        color:"#47300D"
    },
    bouton:{
        backgroundColor:"#47300D",
        padding:10,
        borderRadius:8,
        height:50,
    },
    value:{
        color:"#fff",
        textAlign:"center",
        fontSize:20,
    },
    image:{
        width:500,
        height:175
    }
})

export default Booking