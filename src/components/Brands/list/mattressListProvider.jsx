import React, { useContext, useState } from "react";

const MattressListCtx = React.createContext();

const MattressListProvider = ({ children }) => {
  const [state, setState] = useState(null);
  // const [state, setState] = useState({ brand: "sealy", comfort: ["1", "2"] });
  const writeState = (newState) => setState(newState);
  const getState = () => {
    if (state === null) return false;
    return state;
  };
  return (
    <MattressListCtx.Provider value={{ writeState, getState }}>
      {console.log(state)}}{children}
    </MattressListCtx.Provider>
  );
};

export const useMattressList = () => useContext(MattressListCtx);

export default MattressListProvider;
