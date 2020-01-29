import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function Header(props) {
  return (
    <Appbar.Header style={{backgroundColor:'#24a319', color:'#FFF'}}>
        <Appbar.Content
        title="EasyZap"
        subtitle={props.subtitle}

        />
        <Appbar.Action icon="dots-vertical" onPress={()=>{}} />
    </Appbar.Header>
  );
}
