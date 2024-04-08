import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import  Header  from '../../components/customers/Header'
import SearchBar from '../../components/customers/SearchBar'
import StoreHeader from '../../components/customers/StoreHeader'
import { product } from '../../data/Product'
const Cost = ({navigation}) => {
  return (
    <View>
      <Header/>
      <StoreHeader />
      {product.map((data)=> (
        <View key={data.id} style={styles.Card} >
          <Image style={styles.image} source={data.image}/>
          <View style={styles.flex} >
            <View >
              <Text style={styles.title}>{data.name} </Text>
              <Text style={styles.text}>{data.description}</Text>
            </View>
            <View>
              <Text style={styles.price}>{data.price}</Text>
              <Pressable style={styles.bouton} onPress={() => navigation.push("Booking")}>
                <Text style={styles.value} >Réservation</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  Card:{
    marginTop:5,
    borderBottomWidth:1,
    borderColor:"#ABA9A9",
    flexDirection: "row",
    flexWrap:"wrap",
    marginTop:10,
    paddingBottom:10
  },
  title:{
    fontSize:16,
    fontWeight:"400",
  },
  text:{
    color:"#ABA9A9",
    fontSize:11
  },
  bouton:{
    backgroundColor:'#47300D',
    width:100,
    height:20,
    color:"#fff",
    borderRadius:8,
    textAlign:"center"
  },
  price:{
    color:"#47300D",
    fontSize:16
  },
  image:{
    marginLeft: 20,
  },
  value:{
    textAlign:"center",
    color:"#fff",
    fontSize:9
  },
  flex:{
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginLeft: 20,
    marginRight:20,
    width: 300
  }
})

export default Cost