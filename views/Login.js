import React, {useState , useEffect} from 'react';
import { Platform, Text, Image, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { css } from '../assets/css/css';

export default function Login (){
   
    const [display, setDisplay]=useState(initialState="none");
    const [user, setUser]=useState(initialState=null);
    const [password, setPassword]=useState(initialState=null);
    const [login, setLogin]=useState(initialState=null);


//Envio do Formulario de login
    async function sendForm()
    { 
        let response=await fetch(input='http://192.168.0.121:3000/Login', init={
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={
                name: user,
                password: password
            })
        });
        let json=await response.json();
        console.log(json);
    };    
    
    
    
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={[css.container ,css.darkbg]}> 
            <View style={css.loginLogomarca}>
                <Image source={require('../assets/img/logomarca.png')} />
                
            </View>
            
            <View>
                <Text style={css.loginAlert(display)}>Usuario ou senha errado!</Text>
            </View>

        <View style={css.loginForm}>
            <TextInput style={css.loginInput} placeholder='Usuario' onChangeText={text=>setUser(text)} />
            <TextInput style={css.loginInput} placeholder='Senha' onChangeText={text=>setPassword(text)} secureTextEntry={true} />

            <TouchableOpacity style={css.loginButton} onPress={()=>sendForm()} >
                <Text style={css.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>

    );
}