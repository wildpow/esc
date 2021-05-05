import * as React from "react";
import { styled, theme } from "twin.macro";
import PropTypes from "prop-types";
// import { PrimaryButton } from "../Old/Button";

// const HeaderButton = styled(PrimaryButton)`
//   font-size: 1.25rem;
//   padding: ${theme`spacing[4]`};
//   margin: 0;
//   margin-bottom: 10px;
//   margin-right: 10px;
//   transition: all 0.2s ease;
//   :hover {
//     background: ${theme`colors.red.800`};
//   }
// `;

const HeaderWrapper = styled(`div`)`
  margin-top: 0px;
  box-shadow: ${theme`boxShadow.md`};
  margin-bottom: 10px;
  display: flex;
  background-size: cover;
  background-color: white;
  flex-direction: column;
  background: white;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  font-family: ${theme`fontFamily.serif`};

  .heading__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  h2 {
    color: ${theme`colors.blue.900`};
    font-size: 1.35rem;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 10px;
    border-bottom: 4px solid ${theme`colors.brandRed`};
    justify-self: flex-start;
    align-self: flex-start;
    padding-left: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    color: ${theme`colors.gray.900`};
    margin-bottom: 10px;
    margin-top: 10px;
    line-height: 1.25rem;
    font-family: ${theme`fontFamily.serif`};
    padding-right: 10px;
    padding-left: 10px;
    font-weight: 700;
  }
  @media screen and (min-width: 360px) {
    background: linear-gradient(
        rgba(247, 250, 252, 0.85),
        rgba(247, 250, 252, 0.45)
      ),
      url(${({ headerBG }) => headerBG}) no-repeat;
    background-size: cover;
    h2 {
      font-size: 1.65rem;
    }
  }
  @media screen and (min-width: 760px) {
    background: linear-gradient(
        rgba(247, 250, 252, 0.45),
        rgba(247, 250, 252, 0.45)
      ),
      url(${({ headerBG }) => headerBG}) no-repeat;

    height: 200px;
    background-color: white;
    flex-direction: row;
    margin-bottom: 0px;
    .heading__content {
      align-items: flex-end;
      max-width: 50%;
    }
  }
  @media screen and (min-width: 820px) {
    background: url(${({ headerBG }) => headerBG}) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1000px) {
    .heading__content {
      align-items: flex-end;
      max-width: 50%;
    }
  }
  @media screen and (min-width: 1300px) {
    .heading__content {
      max-width: 50%;
    }
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-weight: 300;

      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
`;
const Header = ({ description, title, headerBG, button }) => (
  <HeaderWrapper headerBG={headerBG}>
    <div className="heading__content">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* {button && <HeaderButton to={button.url}>{button.label}</HeaderButton>} */}
    </div>
  </HeaderWrapper>
);
Header.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerBG: PropTypes.string,
  button: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
};

Header.defaultProps = {
  headerBG: "",
  button: null,
};

export default Header;
