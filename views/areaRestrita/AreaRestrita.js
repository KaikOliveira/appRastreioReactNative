import React, {useState,useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile, Cadastro, Edicao} from '../index';
import {css} from '../../assets/css/css';
//import Icon from 'react-native-vector-icons-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AreaRestrita (){

    const Tab = createMaterialBottomTabNavigator();
    const [user, setUser]=useState(initialState=null);

    useEffect(effect=()=>{
        async function getUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },inputs=[]);
return( 
    
    <Tab.Navigator
        activeColor='#999' 
        inactiveColor='#fff'
        barStyle={css.areaTab} >
      <Tab.Screen name="Profile" component={Profile} 
        options={{
             tabBarIcon:()=>(
                <Icon name="users" size={20} color="#999" />
            )
        }}
        />
      <Tab.Screen name="Cadastro" component={Cadastro} 
        options={{
            tabBarIcon:()=>(
               <Icon name="archive" size={20} color="#999" />
                )
            }}
            />
      <Tab.Screen name="Edicao" component={Edicao}
        options={{
            tabBarIcon:()=>(
               <Icon name="edit" size={20} color="#999" />
                )
            }}
      />
    </Tab.Navigator>
        
    );
}