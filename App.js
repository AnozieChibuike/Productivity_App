import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './components/Login';
import Dashboarrd from './components/Dashboarrd';
const Stack = createNativeStackNavigator()

export default function App() {
  return ( <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboarrd} options={{headerShown: false,gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>        
    <StatusBar hidden={true} />
    </>
  );
}
