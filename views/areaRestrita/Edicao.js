import React, {useState,useEffect} from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuAreaRestrita from '../../assets/components/menuAreaRestrita';


export default function Edicao ({navigation}){


    return(
        <View style={[css.container, css.containerTop]}>
        <MenuAreaRestrita title='Edicao' navigation={navigation} />
    </View>
        
    );
}