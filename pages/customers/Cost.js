import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import  Header  from '../../components/customers/Header'
// import SearchBar from '../../components/customers/SearchBar'
import StoreHeader from '../../components/customers/StoreHeader'
import { product } from '../../data/Product'
const Cost = ({route, navigation}) => {
  const {id} = route.params;
  FilterData = product.filter((data) => data.id_store === id)
  return (
    <ScrollView>
      <Header/>
      <StoreHeader />
      {FilterData.map((data)=> (
        <View key={data.id} style={styles.Card} >
          <Image style={styles.image} source={data.image}/>
          <View style={styles.flex} >
            <View >
              <Text style={styles.title}>{data.name} </Text>
              <Text style={styles.text}>{data.description}</Text>
            </View>
            <View style={styles.space} >
              <Text  style={styles.price}>{data.price}</Text>
              <Pressable style={styles.bouton} onPress={() => navigation.push("booking")}>
                <Text style={styles.value} >Réserver</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
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
    fontSize:18,
    fontWeight:"400",
  },
  text:{
    color:"#ABA9A9",
    fontSize:12,
    width:150
  },
  bouton:{
    backgroundColor:'#47300D',
    width:100,
    height:20,
    color:"#fff",
    borderRadius:8,
    textAlign:"center",
    alignItems:"center"
  },
  price:{
    color:"#47300D",
    fontSize:16
  },
  image:{
    height:70,
    width:70,
    borderRadius:8,
    marginLeft:20
  },
  value:{
    textAlign:"center",
    color:"#fff",
    fontSize:12
  },
  flex:{
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    marginLeft: 20,
    marginRight:20,
    width: 280
  },
  space:{
    justifyContent:"space-evenly",
  }
})

export default Cost