import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertGlobalState = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: 'GET_ALERT',
      payload: {
        msg,
        type,
      },
    });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertGlobalState.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertGlobalState.Provider>
  );
};

export default AlertGlobalState;
