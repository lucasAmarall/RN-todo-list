import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack';
import {UserStack} from './Stacks/UserStack';

const Router = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <UserStack /> */}
    </NavigationContainer>
  );
};

export {Router};
