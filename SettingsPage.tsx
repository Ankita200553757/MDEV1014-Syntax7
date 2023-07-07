import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const SettingsPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Settings</Text>
    <Text>Customize your weather app settings here.</Text>
    <Button
      title="Go to About"
      onPress={() => navigation.navigate('About')}
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

export default SettingsPage;
