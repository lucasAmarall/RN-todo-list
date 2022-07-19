import {IAction} from '../interfaces/IAction.interface';
import {IState} from '../interfaces/IState.interface';

const GlobalReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'set_token': {
      return {
        ...state,
        token: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default GlobalReducer;
