import { createContext, useEffect, useMemo, useReducer } from 'react';
import { initialState, storeReducer } from '../reducers/storeReducer';
import { getStored, setStored } from '../utils/storage';

export const StoreContext = createContext(null);
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState, () => getStored('slice-express-store', initialState));
  useEffect(() => { setStored('slice-express-store', state); }, [state]);
  const value = useMemo(() => ({...state, dispatch}), [state]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
