import { useState } from "react";
import ToastPortal from "./ToastProtal";

export default function ToastTest() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [inputValue, setInputValue] = useState("Hi");

  const handleClick = () => setIsToastVisible(!isToastVisible);
  const handleChange = ({ target }) => setInputValue(target.value);

  return (
    <div className="App">
      <input value={inputValue} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        {isToastVisible ? "Close" : "Open"}
      </button>

      {isToastVisible && (
        <ToastPortal>
          <div
            style={{
              position: "fixed",
              top: 8,
              right: 8,
              backgroundColor: "pink",
              borderRadius: 8,
              padding: 8,
              zIndex: 1000,
            }}
          >
            <span role="img" aria-label="cheese on toast">
              🧀
            </span>
            on toast
            {inputValue}
          </div>
        </ToastPortal>
      )}
    </div>
  );
}
