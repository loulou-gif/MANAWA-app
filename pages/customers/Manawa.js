import { View, Text, Pressable, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/customers/Header.js';
import SearchBar from '../../components/customers/SearchBar.js';
import { services } from '../../data/services';
import {useNavigation} from '@react-navigation/native'

const Manawa = ({ navigation }) => {
  const nav = useNavigation()
  return (
    <ScrollView>
      
        <Header />
        <SearchBar />
        <View style={styles.center}>
          {services.map((data) => (
            <ImageBackground key={data.id} style={styles.Card} source={data.image}>
              <Pressable onPress={() => navigation.navigate("Owner")}>
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
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10
  },
  titleBox: {
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    opacity: 0.6,
    width: 300,
    height: 40,
    marginTop: 110,
    borderBottomEndRadius: 8
  }
});

export default Manawa;
