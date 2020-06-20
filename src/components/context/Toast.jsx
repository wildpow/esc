import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Toast.css";

const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);
  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };
  useEffect(() => {
    setList([...toastList]);

    // eslint-disable-next-line
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, list]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${toast.position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button type="button" onClick={() => deleteToast(toast.id)}>
              X
            </button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Toast.defaultProps = {
  position: "bottom-right",
};
Toast.propTypes = {
  toastList: PropTypes.instanceOf(Array).isRequired,
  position: PropTypes.string,
  // autoDelete: PropTypes.bool,
  // dismissTime: PropTypes.number,
};

export default Toast;
