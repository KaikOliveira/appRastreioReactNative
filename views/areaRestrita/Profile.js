import React, {useState,useEffect} from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuAreaRestrita from '../../assets/components/menuAreaRestrita';

export default function Profile ({navigation}){

    

    return(
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
        </View>
        /*
        <View style={css.areaMenu}>
            <TouchableOpacity style={css.buttonHomeArea} onPress={()=>navigation.navigate('Home')} >
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.areaTitle}> Profile </Text>

            <TouchableOpacity style={css.buttonLogoutArea} onPress={()=>logout()} >
                <Icon name="trash" size={20} color="#999" />
            </TouchableOpacity>

        </View>
        */
    );
}