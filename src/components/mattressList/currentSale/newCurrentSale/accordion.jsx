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
    /* padding: 18px; */
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;

    color: white;
    cursor: pointer;
    background-color: ${props => props.theme.mainColor1};
    font-family: ${props => props.theme.MainFont1};
    width: 100%;

    @media (min-width: 567px) {
      padding: 8px;
      border-radius: 0.18rem;
      line-height: 20px;
    }
    @media (min-width: 768px) {
      padding: 10px;

      line-height: 25px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 20px;
      padding: 15px;
    }
    @media (min-width: 1200px) {
      padding: 20px 20px 20px 20px;
    }
    @media (min-width: 1300px) {
      margin-bottom: 10px;
    }
    @media print {
      /* border-color: black;
    color: black;
    font-size: 1.2rem;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none; */
      /* width: 220px; */
    }
  }
  .accordion:hover,
  .active {
    background-color: #ccc;
  }
  .accordionTitle {
    font-family: "Open Sans", sans-serif;
    /* font-weight: 600; */
    /* font-size: 14px; */
    text-align: left;
    margin: 0;
    @media (min-width: 567px) {
      /* -moz-appearance: none;
      -webkit-appearance: none;
      padding: 8px;
      border-radius: 0.18rem;
      line-height: 20px; */
    }
    @media (min-width: 768px) {
      font-size: 1.2rem;
      line-height: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1200px) {
      /* padding: 20px 20px 20px 20px; */
    }
    @media (min-width: 1300px) {
      /* margin-bottom: 10px; */
    }
    @media print {
      border-color: black;
      color: black;
      font-size: 1.2rem;
      border: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      /* width: 220px; */
    }
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
        <Chevron width={10} fill={"#777"} className={`${setRotate}`} />
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
