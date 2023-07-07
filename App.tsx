import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import WeatherPage from './WeatherPage';
import ForecastPage from './ForecastPage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Weather" component={WeatherPage} />
        <Stack.Screen name="Forecast" component={ForecastPage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}