import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { fonts, colors, boxShadow } from "../../../styles/theme.styled";
import DownArrow from "../../../svgs/arrow-down-solid.svg";
import UpArrow from "../../../svgs/arrow-up-solid.svg";

const AccordionWrapper = styled.div`
  .accordion {
    background-color: white;
    color: #444;
    cursor: pointer;
    width: 100%;
    border: ${({ active }) =>
      active ? "2px solid white" : `2px solid ${colors.red[900]}`};
    text-align: left;
    outline: none;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    font-family: ${fonts.sans};
    color: ${colors.blue["900"]};
    padding-left: 20px;
    font-weight: 400;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 1.3rem;
    border-bottom: 4px solid ${colors.brandRed};
    box-shadow: ${boxShadow.md};
    font-weight: 700;
    svg {
      width: 20px;
    }
  }
  .accordion:hover {
    box-shadow: ${boxShadow.lg};
    transform: ${({ active }) => (active ? "" : "translateY(-1px)")};
  }
  .panel {
    /* padding: 0 18px; */
    background-color: white;
    /* max-height: 0; */
    overflow: hidden;
    transition: all 0.2s ease-out;
    padding-top: ${({ active }) => (active ? "20px" : "0")};
    background-color: white;
    font-family: ${fonts.sans};
    background-color: white;
    opacity: ${({ active }) => (active ? 1 : 0.4)};
    display: flex;
    flex-direction: column;
    max-height: ${({ active }) => (active ? "100%" : `0`)};
    label {
      padding-left: 20px;
      padding-bottom: 15px;
      color: ${colors.gray["700"]};
      pointer-events: none;
    }
    label:last-child {
      /* padding-bottom: 20px; */
    }
  }
`;
export default function Accordion({ title, children }) {
  const [active, setActive] = useState(true);
  return (
    <AccordionWrapper active={active}>
      <button
        type="button"
        className="accordion"
        onClick={() => setActive(!active)}
      >
        {title}
        {active ? <UpArrow /> : <DownArrow />}
      </button>
      <div className="panel">{children}</div>
    </AccordionWrapper>
  );
}
Accordion.defaultProps = {
  title: "Default Title",
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
