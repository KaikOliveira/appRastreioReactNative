import React, {useState,useEffect} from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuAreaRestrita from '../../assets/components/menuAreaRestrita';
import config from '../../config/config.json';

export default function Cadastro ({navigation}){

    const address=config.origin;
    const [code, setCode]= useState (initialState=null);
    const [user, setUser]= useState (initialState=null);
    const [product, setProduct]= useState (initialState=null);
    const [response, setResponse]= useState (initialState=null);

    useEffect(effect= () => {
        getUser();
    }, inputs=[]);

    useEffect(effect= () => {
        randomCode();
    }, inputs=[]);

    //Pegar o id do user -- ID USER PRO CADASTRO DO Product
    async function getUser(){
        let response=await AsyncStorage.getItem('userData');
        let json=JSON.parse(response);
        setUser(json.id);
    }

    //Gerar cod random unico --- CODE DO PRODUCT
    async function randomCode(){
        let result = '';
        let length=7;
        let chars='0123456789ABCDF';
        for (let i = length; i > 0 ; --i) result += chars [Math.floor(x=Math.random() * chars.length )]; 
        setCode(result);
    }
    //Envio do Formulário
    async function sendForm(){
        let response=await fetch(input=config.urlRoot+'create',init={
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={
                userId: user,
                code: code,
                product: product,
                local: address
            })
        });
    }

    return(
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Cadastro' navigation={navigation} />

            <Text>
                {address}
                {user}
                {product}
                {code}
            </Text> 
            <View style={css.loginInput}>
                <TextInput 
                    placeholder="Nome do Produto:"
                    onChangeText={text=>setProduct(text)}
                />
            </View>

            <TouchableOpacity style={css.loginButton} onPress={() => sendForm()}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        
    );
}