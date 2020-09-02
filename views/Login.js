import React, {useState , useEffect} from 'react';
import { Platform, Text, Image, TextInput, View, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { css } from '../assets/css/css';
//import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login ({navigation}){
   
    const [display, setDisplay]=useState(initialState="none");
    const [user, setUser]=useState(initialState=null);
    const [password, setPassword]=useState(initialState=null);
    const [login, setLogin]=useState(initialState=false);


//Efeitos
useEffect(effect=()=>{
    vefifyLogin();
},inputs=[]);

useEffect(effect=()=>{
    if(login === true){
        biometric();
    }
},inputs=[login]);


//Verificar se o usuario no bd ja possui algum login Bio
async function vefifyLogin(){
    let response=await AsyncStorage.getItem('userData');
    let json=await JSON.parse(response);
    if(json !== null){
        setUser(json.name);
        setPassword(json.password);
        setLogin(value=true);
    }
}

//Biometria 
async function biometric(){
    let compatible=await LocalAuthentication.hasHardwareAsync();
    if(compatible){
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if(!biometricRecords){
            alert('Biometria não cadastrada');
        }else{
            let result=await LocalAuthentication.authenticateAsync();
            if(result.success){
                sendForm();
            }else{
                setUser(value=null);
                setPassword(value=null);
            }
        }
    }
}


//Envio do Formulario de login
    async function sendForm()
    { 
        let response=await fetch(input='http://192.168.0.121:3000/login', init={
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
        if(json === 'error'){
            setDisplay(value='flex');
            setTimeout(handle=()=>{
                setDisplay(value='none');
            },timeout=5000);
            await AsyncStorage.clear();
        }else{
            //let userData=await AsyncStorage.setItem('userData', JSON.stringify(json));
            //let resData=await AsyncStorage.getItem('userData');
           // console.log(JSON.parse(resData));
           await AsyncStorage.setItem('userData', JSON.stringify(json));
           navigation.navigate('AreaRestrita');
        }
    }   
    
    
    
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