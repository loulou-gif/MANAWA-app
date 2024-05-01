import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from '../../components/customers/Header';
import SearchBar from '../../components/customers/SearchBar';
import { Store } from '../../data/Store.js';


const Owner = ({route, navigation}) => {
  const {id}= route.params;

  // Filtrer les données de Store en fonction de l'ID du service sélectionné
  const filteredData = Store.filter((data) => data.id_service === id);

  return (
    <ScrollView>
      <Header/>
      <SearchBar/>
      <View style={styles.container}>
        {filteredData.map((data) => (
          <Pressable key={data.id} onPress={() => navigation.push('Cost', {id: data.id})}>
            <View style={styles.item} key={data.id}> 
              <Image style={styles.image} source={data.profil}/>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{data.title} </Text>
                <Text style={styles.description}>{data.description}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  description: {
    fontSize: 12,
    color: '#ABA9A9',
    width: 250,
  },
});

export default Owner;