import React, { createContext, useState, useContext } from "react";

const ModalCtx = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  return (
    <ModalCtx.Provider value={{ modal, setModal }}>
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalContextProvider;

export const useModalContext = () => useContext(ModalCtx);
