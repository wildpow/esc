import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/styles";

const toastInRight = keyframes`
	from {
	  transform: translateX(100%);
	  
	}
	to {
	  transform: translateX(0);
	}
`;
const Ctx = createContext();

const ToastContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  top: 12px;
  right: 12px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastInRight} 0.7s;
`;

const Toast = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  background-color: ${colors.green[500]};
  top: 12px;
  right: 12px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastInRight} 0.7s;
  :hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
  height: 50px;
  width: 365px;
  color: #fff;
  padding: 20px 15px 10px 10px;
`;
// const Toast = ({ children, onDismiss }) => (
//   <div
//     role="textbox"
//     style={{
//       background: "LemonChiffon",
//       cursor: "pointer",
//       fontSize: 14,
//       margin: 10,
//       padding: 10,
//     }}
//     onKeyDown={() => console.log("POOP")}
//     onClick={onDismiss}
//     tabIndex={0}
//   >
//     {children}
//   </div>
// );

let toastCount = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const add = (content) => {
    console.log(toastCount, "!!!");

    const id = toastCount++;
    const toast = { content, id };
    setToasts([...toasts, toast]);
  };
  const remove = useCallback(
    (id) => {
      const newToasts = toasts.filter((t) => t.id !== id);
      setToasts(newToasts);
    },
    [toasts],
  );
  const onDismiss = (id) => () => remove(id);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        remove(toasts[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [remove, toasts]);
  return (
    <Ctx.Provider value={{ add, remove }}>
      {children}
      {console.log("render")}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {id + 1} &mdash;
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

export const useToasts = () => useContext(Ctx);
