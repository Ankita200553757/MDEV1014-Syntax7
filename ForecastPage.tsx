import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const ForecastPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Weather Forecast</Text>
    <View style={styles.forecastContainer}>
      <View style={styles.forecastItem}>
        <Text style={styles.forecastDay}>Monday</Text>
        <Image
          style={styles.forecastIcon}
          source={require('./images/sunny.png')}
        />
        <Text>Sunny</Text>
        <Text>28°C</Text>
      </View>
      <View style={styles.forecastItem}>
        <Text style={styles.forecastDay}>Tuesday</Text>
        <Image
          style={styles.forecastIcon}
          source={require('./images/cloudy.png')}
        />
        <Text>Cloudy</Text>
        <Text>24°C</Text>
      </View>
    </View>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
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
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  forecastItem: {
    alignItems: 'center',
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  forecastIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
});

export default ForecastPage;
