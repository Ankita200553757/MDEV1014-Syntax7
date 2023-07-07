import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const WeatherPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Today's Weather</Text>
    <Image
      style={styles.weatherImage}
      source={require('./images/weather.png')}
    />
    <Text style={styles.weatherText}>Sunny</Text>
    <Text style={styles.temperature}>Temperature: 28°C</Text>
    <Button
      title="Go to Forecast"
      onPress={() => navigation.navigate('Forecast')}
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
  weatherImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  weatherText: {
    fontSize: 20,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
  },
});

export default WeatherPage;