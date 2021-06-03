import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, fonts } from "../../../styles/theme.styled";
import chevron from "../../../images/new/chevron-down-solid.svg";

const SortBySelect = styled.select`
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-family: ${fonts.sans};
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
  background-image: url(${({ bg }) => bg}),
    linear-gradient(
      to bottom,
      ${colors.blue["600"]} 0%,
      ${colors.blue["800"]} 100%
    );
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1.2em auto, 100%;
  margin-bottom: 20px;
  padding: 1rem 2rem 1rem 1rem;
  transition: background 250ms ease-in-out, transform 150ms ease;

  ::-ms-expand {
    display: none;
  }
  :hover {
    background-image: url(${({ bg }) => bg}),
      linear-gradient(
        to bottom,
        ${colors.red["700"]} 0%,
        ${colors.red["900"]} 100%
      );
  }
  :focus {
    background-image: url(${({ bg }) => bg}),
      linear-gradient(
        to bottom,
        ${colors.red["700"]} 0%,
        ${colors.red["900"]} 100%
      );
    border-color: white;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: white;
    outline: none;
  }
  option {
    font-weight: normal;
    background-color: white;
    color: black;
  }
`;
const SortBy = ({ onChange }) => (
  <SortBySelect name="sorting" onChange={onChange} id="sorting" bg={chevron}>
    <option value="" hidden>
      SORT BY
    </option>
    <option value="low-high">PRICE (LOW-HIGH)</option>
    <option value="high-low">PRICE (HIGH-LOW)</option>
    <option value="name a-z">NAME (A-Z)</option>
    <option value="name z-a">NAME (Z-A)</option>
  </SortBySelect>
);

SortBy.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SortBy;
