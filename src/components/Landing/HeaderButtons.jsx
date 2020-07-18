import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useWindowSize } from "../../context/WindowSizeContext";

const buttonStyles = css`
  padding: 10px 25px;
  font-family: ${(props) => props.theme.MainFont1};
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
const OutBoundLink = styled.a`
  ${buttonStyles}
`;
export const InBoundLink = styled(Link)`
  ${buttonStyles}
`;

const HeaderButtons = ({ buttonName, buttonURL }) => {
  const { width } = useWindowSize();
  return (
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
      {width > 750 ? (
        <OutBoundLink
          href="mailto:info@escmattresscenter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us Now!
        </OutBoundLink>
      ) : (
        <OutBoundLink
          href="tel:1-425-512-0017"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us Now!
        </OutBoundLink>
      )}
    </div>
  );
};

HeaderButtons.propTypes = {
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string,
};

HeaderButtons.defaultProps = {
  buttonName: undefined,
  buttonURL: undefined,
};

export default HeaderButtons;
