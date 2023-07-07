import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import WeatherPage from './WeatherPage';

const HomePage = ({ navigation } ) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Weather App</Text>
    <Image
      style={styles.logo}
      source={require('./images/logo.png')}
    />
    <Text>Welcome to the Weather App!</Text>
    <Button
      title="Go to Weather"
      onPress={() => navigation.navigate('Weather')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default HomePage;