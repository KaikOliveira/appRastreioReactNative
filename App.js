import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Rastreio } from './views/index';
import AreaRestrita from "./views/areaRestrita/AreaRestrita";
import AsyncStorage from '@react-native-community/async-storage';
import { css } from './assets/css/css';

export default function App() {

  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer  >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Rastreios Kaik",
      headerStyle:{backgroundColor:"#ffab40"},
      headerTintColor:'#333',
      headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}}
       />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

