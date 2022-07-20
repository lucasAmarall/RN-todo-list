import {USER_LOGIN_MUTATION} from '../graphql/mutations';
import {useMutation} from '@apollo/client';
import useGlobalDispatch from './useGlobalDispatch';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISignInData {
  email: string;
  password: string;
}

const useAuth = () => {
  const globalDispatch = useGlobalDispatch();
  const [login, {error, loading, data}] = useMutation(USER_LOGIN_MUTATION, {
    onError: _ => null,
  });

  const signIn = (input: ISignInData) => {
    login({
      variables: {
        input,
      },
    });
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    globalDispatch({
      type: 'set_token',
      payload: '',
    });
  };

  const statusCodeMiddleware = e => {
    if (e.message == 'Unauthorized') {
      signOut();
    }
  };

  useEffect(() => {
    const token = data?.login.accessToken;
    if (!token) return;
    globalDispatch({
      type: 'set_token',
      payload: token,
    });
  }, [globalDispatch, data]);

  return {
    signOut,
    signIn,
    statusCodeMiddleware,
    error,
    loading,
    data,
  };
};

export {useAuth};
