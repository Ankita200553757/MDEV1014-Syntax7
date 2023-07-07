import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const AboutPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>About</Text>
    <Text>About the Weather App and its developers.</Text>
    <Button
      title="Go to Contact"
      onPress={() => navigation.navigate('Contact')}
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
});

export default AboutPage;
