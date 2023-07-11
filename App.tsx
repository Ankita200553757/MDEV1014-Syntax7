import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './HomePage';
import WeatherPage from './WeatherPage';
import ForecastPage from './ForecastPage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          drawerActiveTintColor: '#FFFFFF', // Set the active item text color to white
          drawerInactiveTintColor: '#FFFFFF', // Set the inactive item text color to white
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#100529', // Set the drawer background color to #100529
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Weather" component={WeatherPage} />
        <Drawer.Screen name="Forecast" component={ForecastPage} />
        <Drawer.Screen name="Settings" component={SettingsPage} />
        <Drawer.Screen name="About" component={AboutPage} />
        <Drawer.Screen name="Contact" component={ContactPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;