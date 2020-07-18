import React, { useContext } from "react";

const WindowSizeCtx = React.createContext();

export const useWindowSize = () => useContext(WindowSizeCtx);

export default WindowSizeCtx;
