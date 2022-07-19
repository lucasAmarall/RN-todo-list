import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack';
import {UserStack} from './Stacks/UserStack';
import useGlobalState from '../hooks/useGlobalState';
import usePersistentData from '../hooks/usePersistentData';
import useGlobalDispatch from '../hooks/useGlobalDispatch';

const Router = () => {
  const {
    state: persistedToken,
    setState: setPersistedToken,
    isLoading: isRetrievingToken,
  } = usePersistentData<string>('token', '');

  const dispatch = useGlobalDispatch();
  const {token} = useGlobalState();

  useEffect(() => {
    if (token) {
      setPersistedToken(token);
    }
  }, [setPersistedToken, token]);

  useEffect(() => {
    if (persistedToken) {
      dispatch({
        type: 'set_token',
        payload: persistedToken,
      });
    }
  }, [dispatch, persistedToken]);

  if (isRetrievingToken) return null;
  return (
    <NavigationContainer>
      {token ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export {Router};
