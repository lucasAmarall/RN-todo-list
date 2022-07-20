import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../../../pages/Home';
import {Profile} from '../../../pages/Profile';
import {Paths} from '../../../constants/Paths';
import {TAB_BAR_HEIGHT} from '../../../constants/TabNavigatorHeight';

const Tab = createBottomTabNavigator();

const UserStack = () => (
  <Tab.Navigator
    initialRouteName={Paths.home}
    screenOptions={{
      tabBarStyle: {
        height: TAB_BAR_HEIGHT,
      },
    }}>
    <Tab.Screen name={Paths.home} component={Home} />
    <Tab.Screen name={Paths.profile} component={Profile} />
  </Tab.Navigator>
);

export {UserStack};
