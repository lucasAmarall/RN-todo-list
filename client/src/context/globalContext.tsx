import React, {createContext, useReducer} from 'react';
import GlobalReducer from './globalReducer';

import {IState} from '../interfaces/IState.interface';
import {IDispatch} from '../interfaces/IDispatch.interface';

export const GlobalStateContext = createContext<IState | undefined>(undefined);
export const GlobalDispatchContext = createContext<IDispatch | undefined>(
  undefined,
);

export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    token: '',
  });

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
