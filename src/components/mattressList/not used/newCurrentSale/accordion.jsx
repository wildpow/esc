import React, { useState, useRef } from "react";
import styled from "styled-components";
import Chevron from "./chevron";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }
  .accordion:hover,
  .active {
    background-color: #ccc;
  }
  .accordionTitle {
    font-family: ${props => props.theme.MainFont1};
    /* font-weight: 600; */
    font-size: 1rem;
    text-align: left;
    margin: 0;
  }
  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  /* Style to rotate icon when state is active */
  .rotate {
    transform: rotate(90deg);
  }

  /* Style the accordion content panel. Note: hidden by default */
  .accordionContent {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    max-height: 0;
    font-family: ${props => props.theme.MainFont1};
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    margin-bottom: 10px;
  }

  /* Style the accordion content text */
  .accordionText {
    font-family: ${props => props.theme.MainFont1};
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
  }
`;
const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`,
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate",
    );
  };
  return (
    <AccordionSection>
      <button
        className={`accordion ${setActive}`}
        type="button"
        onClick={toggleAccordion}
      >
        <p className="accordionTitle">{props.title}</p>
        <Chevron width={15} fill={"#777"} className={`${setRotate}`} />
      </button>
      <div
        className="accordionContent"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {props.children}
      </div>
    </AccordionSection>
  );
};

export default Accordion;
