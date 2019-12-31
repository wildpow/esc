import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const WindowDimensionsCtx = createContext(null);

const WindowDimensionsProvider = ({ children }) => {
  const resizeInProgress = useRef(false);

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : null,
    height: typeof window !== "undefined" ? window.innerHeight : null,
  });

  useEffect(() => {
    function throttledUpdateWindowSize() {
      setTimeout(() => {
        setDimensions({
          width: typeof window !== "undefined" ? window.innerWidth : null,
          height: typeof window !== "undefined" ? window.innerHeight : null,
        });
        resizeInProgress.current = false;
      }, 500);
    }
    function handleResize() {
      if (resizeInProgress.current === true) {
        return;
      }
      resizeInProgress.current = true;
      throttledUpdateWindowSize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};

export default WindowDimensionsProvider;
export const useWindowDimensions = () => useContext(WindowDimensionsCtx);
