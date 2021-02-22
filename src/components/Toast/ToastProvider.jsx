import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../utils/styles";
import Check from "../../assets/check.svg";

// const toastInLeft = keyframes`
// 	from {
// 		transform: translateX(-100%);

// 	}
// 	to {
// 		transform: translateX(0);
// 	}`;
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
  font-family: ${fonts.sans};
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  top: 3%;
  right: 0px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastInRight} 0.7s;

  width: 100%;

  /* new shit */
  display: flex;
  flex-direction: column;
  @media (min-width: 540px) {
    top: 4%;
    right: 3%;
    align-items: flex-end;
  }
`;

const Toast = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  padding: 30px;
  /* margin: 0 0 6px; */
  margin-bottom: 15px;
  /* width: 300px; */
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: ${colors.gray["900"]};
  opacity: 1;
  background-position: 15px;
  background-repeat: no-repeat;
  background-color: ${colors.yellow["400"]};
  top: 0px;
  right: 0px;
  transition: transform 0.6s ease-in-out;
  animation: ${toastInRight} 0.7s;
  max-width: 400px;
  :hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
  width: 90%;
  margin: 0 auto 15px auto;
  color: ${colors.gray["900"]};
  padding: 20px 15px 10px 10px;
  @media (min-width: 540px) {
    margin: 0 0 15px 0;
    width: auto;
  }
  @media (min-width: 768px) {
    padding: 20px 25px;
  }
  .notification-title {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    /* width: 300px; */
    height: 18px;
  }

  .notification-message {
    margin: 0;
    text-align: left;
    height: 18px;
    margin-left: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: #fff;
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
  .content {
    display: flex;
  }
  .notification-image {
    /* float: left; */
    padding-right: 15px;
  }
`;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (
    title = "Default title",
    description = "Default description for a toast notification",
  ) => {
    const id = Math.floor(Math.random() * 101 + 1);
    const toast = { title, description, id };
    setToasts([...toasts, toast]);
  };
  const removeToast = useCallback(
    (id) => {
      const newToasts = toasts.filter((t) => t.id !== id);
      setToasts(newToasts);
    },
    [toasts],
  );
  const onDismiss = (id) => () => removeToast(id);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        removeToast(toasts[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [removeToast, toasts]);
  return (
    <Ctx.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer className="notification-container top-right">
        {toasts.map((toast) => (
          <Toast key={toast.id} onClick={onDismiss(toast.id)}>
            {/* <button type="button" onClick={() => removeToast(toast.id)}>
              X
            </button> */}
            <div className="content">
              <div className="notification-image">
                <Check />
              </div>
              <div>
                <p className="notification-title">{toast.title}</p>
                <p className="notification-message">{toast.description}</p>
              </div>
            </div>
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

export const useToasts = () => useContext(Ctx);
