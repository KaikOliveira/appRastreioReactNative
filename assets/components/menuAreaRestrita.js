import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MenuAreaRestrita(props){


    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return(

        <View style={css.areaMenu}>
            <TouchableOpacity style={css.buttonHomeArea} onPress={()=>props.navigation.navigate('Home')} >
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.areaTitle}> {props.title} </Text>

            <TouchableOpacity style={css.buttonLogoutArea} onPress={()=>logout()} >
                <Icon name="trash" size={20} color="#999" />
            </TouchableOpacity>

        </View>
        
    );
}