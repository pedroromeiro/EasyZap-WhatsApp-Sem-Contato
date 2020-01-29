import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';

import Header from '../../components/Header';


import AsyncStorage from '@react-native-community/async-storage';


import Item from './Item';

// import { Container } from './styles';

export default function History(props) {

  const [data, setData] = useState([]);


  const getHistory = async () => {
    var history = await AsyncStorage.getItem("history");
    var array = JSON.parse(history);
    if(Array.isArray(array)){
      array.reverse();
      setData(array);
    }
  }

  useEffect(() => {
    props.navigation.addListener('didFocus', getHistory);
    getHistory();
  }, [])


  return (
    <View>
      <Header subtitle="Histórico"/>
        {data.length > 0 ?
            <FlatList
            data={data}
            renderItem={({ item, index}) => <Item data={item}/>} keyExtractor={(item, index) => {return index.toString()}}/>
          :
          <Text style={{textAlign:'center', fontSize:28, color:'#666', marginTop:20, marginHorizontal:20, alignSelf:"center"}}>
            Ainda não há nada no histórico.
          </Text>

        }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  inputContainer: {
    width:"100%",
    height:70,
    display:'flex',
    flexDirection:'row'
  }
})

