import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
  fonts,
  colors,
  boxShadow,
  fontSize,
  radius,
  rounded,
} from "../../../styles/theme.styled";
import DownArrow from "../../../svgs/chevron-down-solid.svg";
import UpArrow from "../../../svgs/chevron-up-solid.svg";

const AccordionWrapper = styled.div`
  .accordion {
    border-top: ${({ active }) =>
      active ? "none" : `4px solid ${colors.red[900]}`};
    border-left: ${({ active }) =>
      active ? "none" : `4px solid ${colors.red[900]}`};
    border-right: ${({ active }) =>
      active ? "none" : `4px solid ${colors.red[900]}`};
    border-bottom-right-radius: ${({ active }) =>
      active ? rounded.none : rounded.md};
    border-bottom-left-radius: ${({ active }) =>
      active ? rounded.none : rounded.md};

    border-bottom: 4px solid ${colors.red[900]};
    border-top-right-radius: ${rounded.md};
    border-top-left-radius: ${rounded.md};
    background-color: white;
    color: ${colors.brandBlue};
    cursor: pointer;
    width: 100%;
    /* border-top: none;
    border-left: none;
    border-right: none; */
    /* outline: ${({ active }) => (active ? "" : "2px solid red")}; */
    /* border: ${({ active }) =>
      active ? "4px solid transparent" : `4px solid ${colors.red[900]}`}; */
    text-align: left;
    outline: none;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    font-family: ${fonts.sans};
    color: ${colors.blue["900"]};
    font-weight: 400;
    padding: 10px 20px;
    font-size: ${fontSize.xl};
    border-bottom: 4px solid ${colors.brandRed};
    box-shadow: ${boxShadow.md};
    font-weight: 500;
    svg {
      width: 20px;
    }
  }
  .accordion:hover {
    /* box-shadow: ${boxShadow.lg}; */
    transform: ${({ active }) => (active ? "" : "translateY(-2px)")};
  }
  .panel {
    /* padding: 0 18px; */
    border-bottom: 4px solid white;
    background-color: white;
    /* max-height: 0; */
    overflow: hidden;
    transition: all 0.1s ease-out;
    padding-top: 0;
    background-color: white;
    font-family: ${fonts.sans};
    background-color: white;
    opacity: 0.4;
    display: flex;
    flex-direction: column;
    max-height: 0;
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
  .active {
    padding-top: 20px;
    opacity: 1;
    max-height: 100%;
    border-bottom: 4px solid ${colors.blue[700]};
  }
  .rotateChevron {
    transition: all 0.25s ease;
    transform: ${({ active }) => (active ? "rotate(0deg)" : "rotate(180deg)")};
  }
`;
export default function Accordion({ title, children, allActive }) {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(!!allActive);
  }, [allActive]);
  return (
    <AccordionWrapper active={active}>
      {console.log(allActive)}
      <button
        type="button"
        className="accordion"
        onClick={() => setActive(!active)}
      >
        {title}
        <div className="rotateChevron">
          <UpArrow />
        </div>
      </button>
      <div className={`${active && "active"} panel`}>{children}</div>
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
