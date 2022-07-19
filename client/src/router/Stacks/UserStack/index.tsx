import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../../../pages/Home';
import {Profile} from '../../../pages/Profile';
import {Paths} from '../../../constants/Paths';

const Tab = createBottomTabNavigator();

const UserStack = () => (
  <Tab.Navigator initialRouteName={Paths.home}>
    <Tab.Screen name={Paths.home} component={Home} />
    <Tab.Screen name={Paths.profile} component={Profile} />
  </Tab.Navigator>
);

export {UserStack};
