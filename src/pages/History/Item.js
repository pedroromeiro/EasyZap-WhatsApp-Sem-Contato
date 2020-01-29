import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import FontIcons from 'react-native-vector-icons/FontAwesome5';

// import { Container } from './styles';

export default function Item(props) {

  const openChat = () => {
    if(props.data.phoneNumber){
      Linking.openURL(`https://api.whatsapp.com/send?phone=+55${props.data.phoneNumber}`);
    }
    else Alert.alert('Ops!', 'Primeiro digite um número.')
  }


  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'space-between', padding:10,}}>
        <Text>{props.data.date} - {props.data.hour}</Text>
        <Text style={{fontSize:22, color:'#444', fontWeight:'bold'}}>{props.data.phoneNumber}</Text>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', paddingRight:15}}>
        <TouchableOpacity style={{padding:5}} onPress={openChat}>
          <FontIcons name="arrow-right" size={28} color='#444'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    minHeight:80,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:'#555555',
    flexDirection:'row'
  }
})

