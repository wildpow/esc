import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { bool, func, number } from "prop-types";
import { useState } from "react";
import {
  colors,
  fonts,
  radius,
  spacing,
  breakpoints,
} from "../../../styles/theme.styled";
import ShoppingCart from "../../../svgs/shopping-cart-solid.svg";
import Check from "../../../svgs/check-solid.svg";
import Arrow from "../../../svgs/arrow-right-solid.svg";
import { useCart } from "../../../contexts/InterfaceContext.ctx";

const mobileAddedKey = keyframes`
0% {
  opacity: .1;
  transform: translateY(-110%) scale(1.1);
}
20% {
  opacity: 1;
  transform: translateY(-10%) scale(1.1);
}
30% {
  transform: translateY(0%) scale(1.1);
}
50% {
  transform: translateY(0%) scale(1.2);
  opacity: 1;
}
70% {
  transform: translateY(0%) scale(1.1);
}
80% {
  transform: translateY(0%) scale(1.1) ;
  opacity: 1;
}

100% {
  transform: translateY(110%) scale(1.2);
  opacity: .1;
}

`;
// OLD keyframe kept it because I'm not sure which one I like best
// const addedKey = keyframes`
// 0% {
//   opacity: .1;
//   transform: translateY(-110%) scale(1.4);
// }
// 20% {
//   opacity: 1;
//   transform: translateY(-10%) scale(1.4);
// }
// 30% {
//   transform: translateY(0%) scale(1.4);
// }
// 50% {
//   transform: translateY(0%) scale(1.4);
//   opacity: 1;
// }
// 70% {
//   transform: translateY(0%) scale(1.4);
// }
// 80% {
//   transform: translateY(10%) scale(1.4) ;
//   opacity: 1;
// }

// 100% {
//   transform: translateY(110%) scale(1.4);
//   opacity: .1;
// }

// `;
const Button = styled.button`
  .start {
    transition: ${({ added, checkCart }) =>
      added || checkCart ? "all 0.4s ease-in-out" : "transform 0s ease"};
    opacity: ${({ added, checkCart }) => (added || checkCart ? 0 : 1)};
    transform: ${({ added }) =>
      added ? "translateY(110%)" : "translateY(0%)"};
    display: flex;
    justify-content: center;
    align-items: center;
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
    /* transition: all 0.3s ease-in-out; */
    animation: ${mobileAddedKey} 2100ms ease-in-out;
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
    transition: all 0.4s ease-in-out;
    background-color: ${colors.yellow[400]};
    /* transform: translateY(0%); */
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
  pointer-events: ${({ added, checkCartEnd }) =>
    added || checkCartEnd ? "none" : "auto"};
  @media (hover: hover) {
    &:hover {
      background: ${({ inverse, added, checkCartEnd, checkCart }) =>
        inverse
          ? colors.white
          : added || checkCartEnd || checkCart
          ? colors.blue["500"]
          : colors.blue["900"]};
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
  /* @media (min-width: ${breakpoints.sm}) {
    .add {
      animation: ${mobileAddedKey} 2100ms ease-in-out;
    }
  } */
  @media print {
    display: none;
  }
`;
// Button has 3 stages. 2 boolean values 'added' and 'checkCart'
//  move the corresponding text through each animation.
//  The 3rd 'checkCartEnd' sets transform to the opposite
//  direction of where the text came in from.
export default function AnimatedSubmitBtn({ disabled, cb, qty }) {
  const { setCartStatus } = useCart();
  const [added, setAdded] = useState(false);
  const [checkCart, setCheckCart] = useState(false);
  const [checkCartEnd, setCheckCartEnd] = useState(false);
  const submit = (e) => {
    if (checkCart) {
      setCartStatus("open");
    } else {
      cb(e);
      setAdded(true);
      setTimeout(() => {
        setCheckCart(true);
        setAdded(false);
        setTimeout(() => {
          setCheckCart(false);
          setCheckCartEnd(true);
          setTimeout(() => setCheckCartEnd(false), 420);
        }, 6500);
      }, 2000);
    }
  };

  return (
    <Button
      onClick={(e) => submit(e)}
      type="button"
      added={added}
      checkCart={checkCart}
      disabled={disabled}
      checkCartEnd={checkCartEnd}
    >
      <div className="start">
        Add to Cart
        <ShoppingCart />
      </div>
      {added && (
        <div className="add">
          {`${qty} Item${qty === 1 ? "" : "s"} Added to Cart`}
          <Check />
        </div>
      )}
      <div
        className="check"
        style={{ transform: checkCartEnd && "translateY(110%)" }}
      >
        Go to Cart
        <Arrow />
      </div>
    </Button>
  );
}
AnimatedSubmitBtn.propTypes = {
  disabled: bool.isRequired,
  cb: func.isRequired,
  qty: number,
};

AnimatedSubmitBtn.defaultProps = {
  qty: 1,
};
