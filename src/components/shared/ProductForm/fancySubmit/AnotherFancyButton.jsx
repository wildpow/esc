import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { colors, fonts, radius, spacing } from "../../../../utils/styles";
import ShopingCart from "../../../../assets/shopping-cart-solid.svg";
import Check from "../../../../assets/check-solid.svg";
import Arrow from "../../../../assets/arrow-right-solid.svg";

const addedKey = keyframes`
0% {
  opacity: 0;
  transform: translateY(-110%) scale(1.4);
}
20% {
  opacity: 1;
  transform: translateY(-10%) scale(1.4);
}
40% {
  transform: translateY(0%) scale(1.4);
}
50% {
  transform: translateY(0%) scale(1.4);
  opacity: 1;
}
60% {
  transform: translateY(0%) scale(1.4);
}
80% {
  transform: translateY(10%) scale(1.4) ;
  opacity: 1;
}

100% {
  transform: translateY(110%) scale(1.4);
  opacity: 0;
}

`;
const Button = styled.button`
  .start {
    transition: all 0.4s ease-in-out;
    opacity: ${({ added, checkCart }) => (added || checkCart ? 0 : 1)};
    transform: ${({ added }) =>
      added ? "translateY(110%)" : "translateY(0%)"};
  }
  .add {
    /* opacity: ${({ added }) => (added ? 1 : 0)}; */
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    background-color: ${colors.blue[500]};
    transition: all 0.3s ease-in-out;
    animation: ${addedKey} 2500ms ease-in-out;
    transform: translateY(-110%) scale(1.4);
    opacity: 0;
    /* transform: ${({ added }) =>
      added ? "translateY(50%)" : "translateY(-110%)"}; */

    svg {
      height: 1.1em;
      margin-left: ${(props) => (props.iconOnLeft ? 0 : "0.5em")};
      margin-right: ${(props) => (props.iconOnLeft ? "0.5em" : 0)};
      width: 1.1em;
    }
  }
  .check {
    opacity: ${({ checkCart }) => (checkCart ? 1 : 0)};
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    color: ${colors.gray[900]};
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    background-color: ${colors.yellow[400]};
    transform: translateY(0%);
    transform: ${({ checkCart }) =>
      checkCart ? "translateY(0%)" : "translateY(-110%)"};

    svg {
      height: 1.1em;
      margin-left: ${(props) => (props.iconOnLeft ? 0 : "0.5em")};
      margin-right: ${(props) => (props.iconOnLeft ? "0.5em" : 0)};
      width: 1.1em;
    }
  }
  overflow: hidden;

  position: relative;
  background: ${(props) =>
    props.added || props.checkCart ? colors.blue[500] : colors.blue["700"]};
  border: 1px solid
    ${(props) => (props.inverse ? colors.blue["400"] : colors.blue["900"])};
  color: ${(props) =>
    props.inverse ? colors.blue["800"] : colors.blue["100"]};
  font-size: 1.1rem;
  padding: 0.5em 0.75rem;
  transition: 0.5s;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  font-family: ${fonts.sans};
  border-radius: ${radius.default}px;
  pointer-events: ${({ added }) => (added ? "none" : "auto")};
  @media (hover: hover) {
    &:hover {
      background: ${({ inverse }) =>
        inverse ? colors.white : colors.blue["900"]};
      box-shadow: 0 0 0 1px ${colors.gray["900"]};
    }
  }
  :focus {
    box-shadow: 0 0 0 3px ${colors.blue["200"]};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  svg {
    height: 1.1em;
    margin-left: ${(props) => (props.iconOnLeft ? 0 : "0.5em")};
    margin-right: ${(props) => (props.iconOnLeft ? "0.5em" : 0)};
    width: 1.1em;
  }
  :disabled,
  :disabled:focus {
    cursor: not-allowed;
    color: ${colors.blue["700"]};
    opacity: 0.3;
    border: 1px solid ${colors.blue["400"]};
    background: ${colors.white};
    box-shadow: none;
  }

  font-size: 1.25rem;
  margin-top: ${spacing["4"]};
  width: 100%;
  font-family: ${fonts.sans};
  align-self: flex-end;
  flex-grow: 1;
  @media print {
    display: none;
  }
`;

export default function Another() {
  const [added, setAdded] = useState(false);
  const [checkCart, setCheckCart] = useState(false);
  const submit = () => {
    if (checkCart) {
      console.log("Go to cart");
    } else {
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setCheckCart(true);
        setTimeout(() => {
          setCheckCart(false);
        }, 6500);
      }, 2800);
    }
  };
  return (
    <Button onClick={submit} type="button" added={added} checkCart={checkCart}>
      <div className="start">
        Add to Cart
        {console.log(added, "added")}
        {console.log("checkCart", checkCart)}
        <ShopingCart />
      </div>
      {added && (
        <div className="add">
          Added to Cart
          <Check />
        </div>
      )}
      <div className="check">
        Go To Cart
        <Arrow />
      </div>
    </Button>
  );
}
