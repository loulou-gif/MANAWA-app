import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/customers/Header.js';
import SearchBar from '../../components/customers/SearchBar.js';
import { services } from '../../data/services';

const Manawa = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  // Fonction de filtrage
  const filterData = (data, searchTerm) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Données filtrées
  const filteredServices = searchPhrase ? filterData(services, searchPhrase) : services;

  // Fonction de gestion de la recherche
  const handleSearch = (text) => {
    setSearchPhrase(text);
  };

  return (
    <ScrollView>
      <Header />
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} onChangeText={handleSearch} />
      <View style={styles.center}>
        {filteredServices.map((data) => (
          <ImageBackground key={data.id} style={styles.Card} source={data.image}>
            <Pressable onPress={() => navigation.navigate('Owner', { id: data.id })}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{data.name}</Text>
              </View>
            </Pressable>
          </ImageBackground>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Card: {
    width: 300,
    height: 150,
    borderRadius: 8,
    shadowColor: "black",
    boxShadow: 20,
    resizeMode: "cover",
    marginTop: 20,
  },
  center: {
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
    opacity: 1
  },
  titleBox: {
    justifyContent: "center",
    backgroundColor: "#7A4D09",
    opacity: 0.8,
    width: 300,
    height: 40,
    marginTop: 110,
    borderBottomEndRadius: 8
  }
});

export default Manawa;
