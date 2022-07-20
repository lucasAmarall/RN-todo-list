import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useState} from 'react';

const usePersistentData = <T extends unknown>(key: string, defaultValue: T) => {
  const [state, setState] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPersistedValue = useCallback(async () => {
    setIsLoading(true);
    const rawValue = await AsyncStorage.getItem(key);
    setIsLoading(false);
    if (!rawValue) return;
    const parsedValue = JSON.parse(rawValue ?? '');
    if (parsedValue) setState(parsedValue);
  }, [key]);

  useEffect(() => {
    getPersistedValue();
  }, [getPersistedValue]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return {state, setState, isLoading};
};

export default usePersistentData;
