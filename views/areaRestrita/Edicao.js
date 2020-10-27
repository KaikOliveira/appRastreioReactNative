import React, {useState,useEffect} from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuAreaRestrita from '../../assets/components/menuAreaRestrita';
import { BarCodeScanner } from 'expo-barcode-scanner';
import config from '../../config/config.json';


export default function Edicao ({navigation}){

    //Edicao com o QRCode
    const [hasPermission, setHasPermission] = useState(initialState=null);
    const [scanned, setScanned] = useState(initialState=false);
    const [displayQR, setDisplayQR] = useState(initialState='flex');
    const [displayForm, setDisplayForm] = useState(initialState='none');
    const [code, setCode] = useState(initialState=null);
    const [product, setProduct] = useState(initialState=null);
    const [localization, setLocalization] = useState(initialState=null);

    //Verificação se pode usar o camera
    useEffect(effect= () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(value=status === 'granted');
        })();
    }, inputs=[]);

    //Leitura do codigo QR
    async function handlerBarCodeScanned({ type, data }) {
        setScanned(value=true);
        setDisplayQR(value='none');
        setDisplayForm(value='flex');
        setCode(data);
        //searchProduct(data);
        await searchProduto(data);
    }

    async function searchProduto(data){
    let response=await fetch(config.urlRoot+'searchProduct',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: data
        })
    });
    let json=await response.json();
    setProduct(json.Products[0].name);
    console.log(response);
}

/*
    //Buscar no bd
    async function searchProduto(codigo) {
        let response=await fetch(input=config.urlRoot+'searchproduct',init={
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={
                
                code: codigo
                 
            })
        });
    }
*/

    //Consulta no bd 
    /*
    async function searchProduto(codigo) {
        let response=await fetch(input=config.urlRoot+'searchProduct', init={
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value={

                code: codigo
                
            })
        });
    }
*/
    async function sendForm() {

    }


    return(
        <View style={[css.container, css.containerTop]}>

            <MenuAreaRestrita title='Edicao' navigation={navigation} />

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : value=>handlerBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
            />

            <View style={css.qr__form(displayForm)}>
                <Text>Codigo do Produto{code}</Text>

                <View style={css.loginInput}>
                    <TextInput
                        placeholder='Nome do Produto'
                        onChangeText={text=>setProduct(text)}
                        value={product}
                    />
                </View>

                <View style={css.loginInput}>
                    <TextInput
                        placeholder='Localização'
                        onChangeText={text=>setLocalization(text)}
                        value={localization}
                    />
                </View>

                <TouchableOpacity style={css.loginButton} onPress={ () => sendForm()}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>

            </View>
        </View>

        
    );
}