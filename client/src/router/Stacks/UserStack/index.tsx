import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../../../pages/Home';
import {Profile} from '../../../pages/Profile';
import {Paths} from '../../../constants/Paths';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const UserStack = () => (
  <Tab.Navigator
    initialRouteName={Paths.home}
    screenOptions={{
      tabBarHideOnKeyboard: Platform.select({ios: true, android: false}),
    }}>
    <Tab.Screen name={Paths.home} component={Home} />
    <Tab.Screen name={Paths.profile} component={Profile} />
  </Tab.Navigator>
);

export {UserStack};
