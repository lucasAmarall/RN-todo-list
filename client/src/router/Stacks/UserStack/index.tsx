import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../../../pages/Home';
import {Profile} from '../../../pages/Profile';
import {Paths} from '../../../constants/Paths';

const Stack = createNativeStackNavigator();

const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Paths.profile} component={Profile} />
    <Stack.Screen name={Paths.home} component={Home} />
  </Stack.Navigator>
);

export {UserStack};
