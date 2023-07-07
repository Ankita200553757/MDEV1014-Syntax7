import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContactPage = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Contact</Text>
    <Text>Contact us for any inquiries or support.</Text>
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

export default ContactPage;