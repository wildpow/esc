import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { fonts } from "../../styles/theme.styled";

export const InBoundLink = styled(Link)`
  padding: 10px 25px;
  font-family: ${fonts.sans};
  text-decoration: none;
  background: #00103b;
  color: white;
  font-size: 18px;
  margin: 5px;
  transition: all 0.2s ease;
  :hover {
    background: #c8645d;
  }
`;

const HeaderButtons = ({ buttonName, buttonURL }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: " 54px",
      flexWrap: "wrap",
    }}
  >
    {buttonName && (
      <InBoundLink to={buttonURL}>{`Shop ${buttonName} now!`}</InBoundLink>
    )}
    <InBoundLink to="/contact-us">Contact Us Now!</InBoundLink>
  </div>
);

HeaderButtons.propTypes = {
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string,
};

HeaderButtons.defaultProps = {
  buttonName: undefined,
  buttonURL: undefined,
};

export default HeaderButtons;
