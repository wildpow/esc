import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const QtyWrapper = styled.div`
  /* * {
    outline: 1px solid red;
  } */
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #2d2926;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #a19389;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    outline: none;
    -moz-appearance: none;
    cursor: default;
    font-family: ${(props) => props.theme.MainFont3};
    color: #2d2926;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 0;
    line-height: 1;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 1.3rem;
    height: calc(100% - 4px);
    height: 100%;
  }
  .plus,
  .minus {
    padding: 0;
    border: none;
    min-width: 40px;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    background: transparent;
    line-height: 1;

    div {
      transition: all 0.1s ease-in-out;
    }
    div span {
      color: transparent;
      text-shadow: 0 0 0 #2d2926;
      transition: all 0.2s ease-in-out;
      line-height: 1;
    }
    :hover {
      div {
        transform: scale(0.8) translateX(1.5px);
      }
      div span {
        text-shadow: 0 0 0 #397cc7;
      }
    }
  }
  .plus {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .minus {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
const Quantity = ({ qty, max, hook }) => {
  function onQty(type, quantity) {
    let newQty = quantity;
    if (type === "minus") {
      if (quantity === 1) return null;
      newQty -= 1;
      hook(newQty);
    } else {
      if (quantity === max) return null;
      newQty += 1;
      hook(newQty);
    }
    return null;
  }
  return (
    <QtyWrapper>
      <label htmlFor="quantity" aria-label="quantity" hidden>
        Qty:
      </label>
      <button
        type="button"
        aria-label="subtract one from quantity"
        onClick={() => onQty("minus", qty)}
        className="minus"
      >
        <div>
          <span role="img" aria-label="add one to quantity">
            ➖
          </span>
        </div>
      </button>
      <input
        id="quantity"
        type="number"
        value={qty}
        readOnly
        max={max}
        min="1"
        name="quantity"
      />
      <button
        type="button"
        aria-label="minus 1 quantity"
        className="plus"
        onClick={() => onQty("plus", qty)}
      >
        <div>
          <span role="img" aria-label="plus sign">
            ➕
          </span>
        </div>
      </button>
    </QtyWrapper>
  );
};

Quantity.defaultProps = {
  max: 5,
};

Quantity.propTypes = {
  qty: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired,
  max: PropTypes.number,
};
export default Quantity;
