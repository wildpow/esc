import React, { useState, useRef } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  button {
    width: 100%;
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background: #0053ba;
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
  }

  .accordion__content {
    transition: max-height 0.6s ease;
    max-height: ${props => props.height};
    overflow: hidden;
    max-height: 0;
  }
`;

const Accordion = ({ title, children }) => {
  const content = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const toggleAccordion = () => {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  };
  // const scrollHeight =
  //   content.current.scrollHeight === null ? "" : content.current.scrollHeight;
  return (
    <AccordionWrapper active={active} height={height}>
      {console.log(active, height)}
      <button
        // className={`accordion ${setActive}`}
        type="button"
        onClick={toggleAccordion}
      >
        {title}
        {/* <p className="accordionTitle">{props.title}</p> */}
        {/* <Chevron width={15} fill={"#777"} className={`${setRotate}`} /> */}
      </button>
      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        {children}
      </div>
    </AccordionWrapper>
  );
};
export default Accordion;
