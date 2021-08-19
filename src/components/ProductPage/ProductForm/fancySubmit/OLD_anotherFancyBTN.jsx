import { useState } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../../../utils/styles";

const Wrapper = styled.div`
  .addtocart {
    display: block;
    padding: 0.5em 0.75rem;
    font-family: ${fonts.sans};
    border-radius: ${radius.default}px;
    border: none;
    font-size: 2em;
    position: relative;

    cursor: pointer;
    height: 44px;
    width: 400px;
    overflow: hidden;
    transition: transform 0.1s;
    z-index: 1;

    :hover {
      transform: scale(1.1);
    }
  }
  .pretext {
    color: #fff;
    background: ${colors.blue["700"]};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Quicksand", sans-serif;
  }
  i {
    margin-right: 10px;
  }
  .done {
    background: #be2edd;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;

    transform: translate(-110%) skew(-40deg);
    transform: ${({ added }) =>
      added ? "translate(0px)" : "translate(-110%) skew(-40deg)"};
  }
  .next {
    background: green;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    transition: transform 0.3s ease;
    transform: translate(110%) skew(40deg);
    transform: ${({ next }) =>
      next ? "translate(0px)" : "translate(110%) skew(40deg)"};
  }
  .posttext {
    background: #be2edd;
  }
  .fa-check {
    background: #be2edd;
  }
`;
export default function Another() {
  const [added, setAdded] = useState(false);
  const [next, setNext] = useState(false);
  const submit = () => {
    setAdded(!added);
    setTimeout(() => {
      // setAdded(false);
      setNext(true);
      setTimeout(() => {
        setNext(false);
        setAdded(false);
      }, 4500);
    }, 1400);
  };
  return (
    <Wrapper added={added} next={next}>
      {console.log("added", added)}
      {console.log("next", next)}

      <button className="addtocart" type="button" onClick={submit}>
        <div className="pretext">
          <i className="fas fa-cart-plus" />
          ADD TO CART
        </div>

        <div className="pretext done">
          <div className="posttext">
            <i className="fas fa-check" />
            ADDED
          </div>
        </div>
        <div className="pretext next">
          <div className="posttext2">
            <i className="fas fa-check" />
            GO TO CART
          </div>
        </div>
      </button>
    </Wrapper>
  );
}
