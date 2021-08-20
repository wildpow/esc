import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { bool, func, number } from "prop-types";
import { useState } from "react";
import { colors, fonts, radius, spacing } from "../../../styles/theme.styled";
import ShoppingCart from "../../../svgs/shopping-cart-solid.svg";
import Check from "../../../svgs/check-solid.svg";
import Arrow from "../../../svgs/arrow-right-solid.svg";
import { useCart } from "../../../contexts/InterfaceContext.ctx";

const a2ddToCart = keyframes`
0% {
  transform: translateY(-100%);
}
10% {
  transform: translateY(-66.66%);
}
20% {
  transform: translateY(-66.66%);
}
30% {
  transform: translateY(-33.33%);
}
40% {
  transform: translateY(-33.33%);
}
50% {
  transform: translateY(-33.33%);
}
60% {
  transform: translateY(-33.33%);
}
70% {
  transform: translateY(-33.33%);
}
80% {
  transform: translateY(-33.33%);
}
90% {
  transform: translateY(-33.33%) ;

}
100% {
  transform: translateY(0%);
}
`;
const Btn = styled.button`
  height: 46px;
  width: 100%;
  background-color: transparent;
  position: relative;
  font-family: ${fonts.sans};
  margin-top: ${spacing["4"]};
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  padding: 0;
  overflow: hidden;
  .startBtn {
    transition: all 0.4s ease-in-out;
    background: ${colors.blue[700]};
  }
  .addBtn {
    background-color: ${colors.blue[500]};
    font-size: 1.45rem;
  }
  .checkBtn {
    color: ${colors.gray[900]};
    background-color: ${colors.yellow[400]};
    border: 2px solid ${colors.gray["900"]};
    font-size: 1.45rem;
  }
  .movingBtns {
    animation: ${a2ddToCart} 6500ms ease-in-out;
    z-index: 1;

    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    transform: translateY(-100%);
  }

  .btn {
    border-radius: ${radius.default}px;
    border: 1px solid ${colors.blue["900"]};
    height: 46px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 1.1em;
      margin-left: 0.5em;
      margin-right: 0;
      width: 1.1em;
    }
  }

  @media (hover: hover) {
    :hover {
      .startBtn {
        background: ${colors.blue["900"]};
        box-shadow: 0 0 0 1px ${colors.gray["900"]};
      }
    }
  }
  :focus {
    box-shadow: 0 0 0 3px ${colors.gray["200"]};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  :disabled,
  :disabled:focus {
    .startBtn {
      cursor: not-allowed;
      color: ${colors.blue["700"]};
      opacity: 0.3;
      border: 1px solid ${colors.blue["400"]};
      background: ${colors.white};
      box-shadow: none;
    }
  }
`;

export default function AnimatedBtn({ disabled, cb, qty }) {
  const { setCartStatus } = useCart();
  const [added, setAdded] = useState(false);
  const submit = (e) => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 6500);
  };
  return (
    <Btn
      onClick={(e) => (added ? setCartStatus("open") : submit(e))}
      added={added}
      disabled={disabled}
      type="button"
    >
      {added && (
        <div className="movingBtns">
          <div className="startBtn btn">
            Add to Cart
            <ShoppingCart />
          </div>
          <div className="checkBtn btn">
            Go to Cart
            <Arrow />
          </div>
          <div className="addBtn btn">
            {`${qty} Item${qty === 1 ? "" : "s"} Added to Cart`}
            <Check />
          </div>
        </div>
      )}

      <div className="startBtn btn">
        Add to Cart
        <ShoppingCart />
      </div>
    </Btn>
  );
}

AnimatedBtn.propTypes = {
  disabled: bool.isRequired,
  cb: func.isRequired,
  qty: number,
};

AnimatedBtn.defaultProps = {
  qty: 1,
};
