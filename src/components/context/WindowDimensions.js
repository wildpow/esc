import React, { createContext, useContext, useState, useEffect } from "react";

const WindowDimensionsCtx = createContext(null);

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : null,
    height: typeof window !== "undefined" ? window.innerHeight : null,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: typeof window !== "undefined" ? window.innerWidth : null,
        height: typeof window !== "undefined" ? window.innerHeight : null,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};

export default WindowDimensionsProvider;
export const useWindowDimensions = () => useContext(WindowDimensionsCtx);
