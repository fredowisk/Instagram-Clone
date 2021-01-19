import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Feed from '../screens/Feed';

import camera from '../assets/camera.png';
import logo from '../assets/logo.png';
import igtv from '../assets/igtv.png';
import send from '../assets/send.png';

const MainNavigator = createStackNavigator(
  {
    Feed,
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => <Image source={logo} />,
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 20}}>
          <Image source={camera} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <TouchableOpacity>
            <Image source={igtv} style={{marginRight: 20}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={send} style={{marginRight: 20}} />
          </TouchableOpacity>
        </View>
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        shadowOpacity: 0,
        elevation: 2,
      },
    },
  },
);

export default createAppContainer(MainNavigator);
