import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GlobalState.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
