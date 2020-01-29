import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native';

import Header from '../../components/Header';

import FontIcons from 'react-native-vector-icons/FontAwesome5';

import {TextInputMask} from 'react-native-masked-text';

import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

export default function History() {

  const [phoneNumber, setPhoneNumber] = useState("");

  const saveHistory = async () => {
    var history = await AsyncStorage.getItem("history");
    var array = JSON.parse(history);
    if(!Array.isArray(array)){
      await AsyncStorage.setItem("history", JSON.stringify([]));
    }
    history = await AsyncStorage.getItem("history");
    array = JSON.parse(history);
    const now = new Date;

    var data = {
      phoneNumber,
      date:`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`,
      hour:`${now.getHours()}:${now.getMinutes()}`
    };
    array.push(data);
    await AsyncStorage.setItem("history", JSON.stringify(array));

    console.log(await AsyncStorage.getItem("history"))
  }

  const openChat = () => {
    if(phoneNumber){
      Linking.openURL(`https://api.whatsapp.com/send?phone=+55${phoneNumber}`);
      saveHistory();
    }
    else Alert.alert('Ops!', 'Primeiro digite um número.')
  }

  return (
    <View style={styles.container}>
      <Header subtitle="Início"/>
      <SafeAreaView style={{...styles.container, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.mainText}>Digite o número de quem você deseja iniciar uma conversa pelo WhatsApp</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <FontIcons name="phone" color="#FFF" size={28}/>
          </View>
          <View style={styles.textInpuView}>

            <TextInputMask type={"cel-phone"} value={phoneNumber} onChangeText={text => setPhoneNumber(text)} 
            style={styles.textInput} 
            allowFontScaling={false} maxLength={15} placeholder={"número"}/>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={openChat}>
          <Text style={styles.textButton}>Abrir conversa</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inputContainer: {
    width:"65%",
    height:45,
    display:'flex',
    flexDirection:'row',
  },
  inputIconContainer:{
    height:"100%", 
    width:45,
    backgroundColor:"blue", 
    display:'flex', 
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#24a319",
    borderTopStartRadius:5,
    borderBottomStartRadius:5
  },
  textInput:{
    paddingLeft:15,
    fontSize:18,
    flex:1
  },
  textInpuView:{
    flex:1,
    borderBottomWidth:1, 
    borderBottomColor:"#24a319", 
  },
  button:{
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    paddingVertical:15,
    alignItems:'center',
    justifyContent:'center',
    height:45,
    backgroundColor:'#24a319',
    marginTop:50,
    borderRadius:5,
  },
  textButton:{
    color:'#FFF',
    fontSize:22,
    textAlign:'center',
  },
  mainText:{
    textAlign:'center',
    marginHorizontal:20,
    marginBottom:50,
    fontSize:20,
    color:'#666'
  }
})

