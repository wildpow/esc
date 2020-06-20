import React, { useState, createContext } from "react";
import Toast from "./Toast";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";

export const ToastCtx = createContext(null);

const ToastProvider = ({ children }) => {
  let toastProperties = null;
  const [list, setList] = useState([]);
  const addToast = (type, description, position) => {
    const id = Math.floor(Math.random() * 101 + 1);
    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          description,
          backgroundColor: "#5cb85c",
          icon: checkIcon,
          position,
        };
        break;
      case "danger":
        toastProperties = {
          id,
          title: "Danger",
          description,
          backgroundColor: "#d9534f",
          icon: errorIcon,
          position,
        };
        break;
      case "info":
        toastProperties = {
          id,
          title: "Info",
          description,
          backgroundColor: "#5bc0de",
          icon: infoIcon,
          position,
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: "Warning",
          description,
          backgroundColor: "#f0ad4e",
          icon: warningIcon,
          position,
        };
        break;

      default:
        setList([]);
    }

    setList([...list, toastProperties]);
  };

  return (
    <ToastCtx.Provider value={{ addToast }}>
      {children}
      <Toast toastList={list} />
    </ToastCtx.Provider>
  );
};

export default ToastProvider;
