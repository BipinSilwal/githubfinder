import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GlobalState = createContext();

export const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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
