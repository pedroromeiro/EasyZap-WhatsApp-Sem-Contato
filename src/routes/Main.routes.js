import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// screens

import Home from '../pages/Home';
import History from '../pages/History';

import FontIcons from 'react-native-vector-icons/FontAwesome5';


export default createMaterialBottomTabNavigator(
    {
        'Início': { 
            screen: Home,
            navigationOptions:{
              tabBarIcon:opt=>opt.focused?<FontIcons name="home" color="#FFF" size={22}/>:<FontIcons name="home" color="#2e753b" size={22}/>
            }
        },
        'Histórico': { 
            screen: History,
            navigationOptions:{
              tabBarIcon:opt=>opt.focused?<FontIcons name="history" color="#FFF" size={22}/>:<FontIcons name="history" color="#2e753b" size={22}/>
              
            }
        },
      },
      {
        initialRouteName: 'Início',
        activeColor: '#f0edf6',
        inactiveColor: '#2e753b',
        barStyle: { backgroundColor: '#24a319' },
      }
)