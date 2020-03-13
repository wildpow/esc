import React, { useState, useRef } from "react";
import styled from "styled-components";
import chevron from "../../../../images/new/chevron-down-solid.svg";

const AccordionWrapper = styled.div`
  margin-bottom: 10px;
  button {
    /* width: 100%;
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
    -moz-appearance: none; */
    transition: background 250ms ease-in-out, transform 150ms ease;
    display: block;
    font-size: 16px;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 700;
    color: white;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url(${props => props.bg}),
      linear-gradient(to bottom, #0069ed 0%, #0069ed 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    /* background-size: 0.65em auto, 100%; */
    background-size: 1.2em auto, 100%;
    margin-bottom: 20px;
    text-align: left;
    padding: 1rem 2rem 1rem 1rem;
  }
  stroke,
  fill {
    color: white;
    background-color: white;
  }
  button:hover,
  button:focus {
    background-image: url(${props => props.bg}),
      linear-gradient(to bottom, #0053ba 0%, #0053ba 100%);
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
    border-bottom: ${props =>
      props.active ? `4px solid ${props.theme.mainColor1}` : "white"};
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
    <AccordionWrapper active={active} height={height} bg={chevron}>
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
