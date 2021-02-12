import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import chevron from "../../../../images/new/chevron-down-solid.svg";
import { useWindowSize } from "../../../../context/WindowSizeContext";
import { colors } from "../../../../utils/styles";

const AccordionWrapper = styled.div`
  margin-bottom: 10px;
  button {
    cursor: pointer;
    transition: background 250ms ease-in-out, transform 150ms ease;
    display: block;
    font-size: 16px;
    font-family: ${(props) => props.theme.MainFont1};
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
    background-image: url(${(props) => props.bg}),
      linear-gradient(
        to bottom,
        ${colors.blue["600"]} 0%,
        ${colors.blue["800"]} 100%
      );
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 1.2em auto, 100%;
    margin-bottom: 1px;
    text-align: left;
    padding: 1rem 2rem 1rem 1rem;
  }
  button:hover,
  button:focus {
    background-image: url(${(props) => props.bg}),
      linear-gradient(
        to bottom,
        ${colors.red["700"]} 0%,
        ${colors.red["900"]} 100%
      );
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
    max-height: ${(props) => props.height};
    overflow: hidden;
    max-height: 0;
    border-bottom: ${(props) =>
      props.active ? `4px solid ${props.theme.mainColor1}` : "white"};
  }
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Accordion = ({ title, children }) => {
  const { width } = useWindowSize();
  const content = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const toggleAccordion = () => {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  };
  useEffect(() => {
    setActive(width >= 768);
    setHeight(width >= 768 ? `${content.current.scrollHeight}px` : "0px");
  }, [width]);
  return (
    <AccordionWrapper active={active} height={height} bg={chevron}>
      <button type="button" onClick={toggleAccordion}>
        {title}
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

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Accordion;
