import { createContext } from "react";

export const defaultInterfaceContext = {
  cartStatus: "closed",
  toggleCart: () => {},
  menuStatus: "closed",
  toggleMenu: () => {},
};
export default createContext(defaultInterfaceContext);
