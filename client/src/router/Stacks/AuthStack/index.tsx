import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../../../pages/SignIn';
import {Paths} from '../../../constants/Paths';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Paths.sign_in}
      component={SignIn}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export {AuthStack};
