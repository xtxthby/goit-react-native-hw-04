// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './Screens/AuthPages/LoginScreen';
import RegistrationScreen from './Screens/AuthPages/RegistrationScreen';
import Home from './Screens/HomePages/Home';

const MainStack = createStackNavigator();// вказує на групу навігаторів

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Regestration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
