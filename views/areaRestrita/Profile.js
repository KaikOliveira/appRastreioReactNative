import React, {useState,useEffect} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuAreaRestrita from '../../assets/components/menuAreaRestrita';
import config from '../../config/config.json';

export default function Profile ({navigation}){

    const [idUser, setIdUser] = useState(initialState= null);
    const [senhaAntiga, setSenhaAntiga] = useState(initialState= null);
    const [novaSenha, setNovaSenha] = useState(initialState= null);
    const [confNovaSenha, setconfNovaSenha] = useState(initialState= null);
    const [msg, setMsg] = useState(initialState=null);

    useEffect(effect= ()=>{
        async function getIdUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    })

    async function sendForm(){
        let response =await fetch(input= `${config.urlRoot}verifyPass`, init={
            method: 'POST',
            body: JSON.stringify( value={
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha,
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
         let json=await response.json();
         setMsg(value=json)
    };
    

    return(
<>
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
        

        <View  >
            <Text>{msg}</Text>
            <TextInput placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} />
            <TextInput placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} />
            <TextInput placeholder='Confirmação da nova senha:' onChangeText={text=>setconfNovaSenha(text)} />

            <TouchableOpacity onPress={()=>sendForm()}>
                <Text>Trocar</Text>
            </TouchableOpacity>
        </View>
        </View>
</>
    ); 
}