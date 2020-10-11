import React, { useContext, useState } from "react";

const MattressListCtx = React.createContext();

const MattressListProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const writeState = (newState) => setState(newState);
  const getState = () => {
    if (state === null) return false;
    return state;
  };
  return (
    <MattressListCtx.Provider value={{ writeState, getState }}>
      {children}
    </MattressListCtx.Provider>
  );
};

export const useMattressList = () => useContext(MattressListCtx);

export default MattressListProvider;
