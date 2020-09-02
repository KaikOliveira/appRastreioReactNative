import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#909090',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop:{
      justifyContent:'flex-start'
    },
    container2: {
      flex: 1,
      flexDirection:"row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'orange',
        padding:20
    },
    buttonHome:{
      marginRight: 40 
    },
    darkbg:{
      backgroundColor:"#757575"
    },
    loginAlert:(text='none')=>({
      fontWeight:"bold",
      fontSize:22,
      color:"red",
      marginTop: 5,
      marginBottom: 15,
      display: text
    }),
    loginForm:{
      width:"80%",

    },
    loginInput:{
      backgroundColor:"#fff",
      fontSize:19,
      padding:7 ,
      marginBottom: 15
    },
    loginButton:{
      padding:12,
      backgroundColor:"#ffab40",
      alignSelf:"center",
      borderRadius: 5
    },
    loginButtonText:{
      fontWeight:"bold",
      fontSize:22,
      color:"#333"
    },
    loginLogomarca:{
      marginBottom:10
    },
    areaTab:{
      backgroundColor:'#333',
      fontSize: 20,
      fontWeight:'bold',
      color:'#333'
    },
    areaMenu:{
      flexDirection:'row',
      paddingTop: 40,
      paddingBottom:10,
      width: '100%',
      backgroundColor:'#111',
      alignItems:'center',
      justifyContent:'center'
    },
    buttonHomeArea:{
      textAlign:'left'
    },
    areaTitle:{
      width: '80%',
      fontWeight:'bold',
      fontSize:20,
      color:'#fff',
      textAlign:'center'
    },
    buttonLogoutArea:{
      textAlign:'right'
    }

  });
  

  export {css};