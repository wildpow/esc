import { createContext, useContext } from "react";

const WindowSizeCtx = createContext();

export const useWindowSize = () => useContext(WindowSizeCtx);

export default WindowSizeCtx;
