import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, fonts } from "../../../styles/theme.styled";
import chevron from "../../../images/new/chevron-down-solid.svg";

const SortBySelect = styled.select``;
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
