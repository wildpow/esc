import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, spacing } from "../../../utils/styles";
import { Button, PrimaryButton } from "../Buttons";

const CheckOut = styled(PrimaryButton)`
  font-size: 1.25rem;
  padding: ${spacing[4]};
  margin: 0;
  /* width: 100%; */
`;
const BackLink = styled(Button)`
  font-size: 1.25rem;
  margin-bottom: ${spacing["4"]};
  width: 100%;
`;
const HeaderWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  display: flex;
  background-color: white;
  flex-direction: column;
  background: white;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.MainFont1};

  .heading__content {
    display: flex;
    /* new stuff */
    align-items: flex-end;
    /* new Stuff */
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    /* align-content: space-between; */
  }
  h2 {
    color: ${colors.blue["900"]};
    font-size: 1.35rem;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 10px;
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
    justify-self: flex-start;
    align-self: flex-start;
    padding-left: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    color: ${colors.gray["900"]};
    margin-bottom: 10px;
    margin-top: 10px;
    line-height: 1.25rem;
    font-family: ${(props) => props.theme.MainFont3};
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 360px) {
    h2 {
      font-size: 1.65rem;
    }
  }
  @media screen and (min-width: 730px) {
    background: url(${(props) => props.headerBG}) no-repeat;
    height: 200px;
    background-color: white;
    flex-direction: row;
    margin-bottom: 0px;
    .heading__content {
      max-width: 350px;
    }
    a {
      margin-right: 20px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 1000px) {
    .heading__content {
      max-width: 550px;
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
  @media screen and (min-width: 1300px) {
    .heading__content {
      max-width: 650px;
    }
  }
`;
const Header = ({
  description,
  title,
  headerBG,
  landing,
  brandName,
  button,
}) => {
  return (
    <HeaderWrapper headerBG={headerBG}>
      {/* {console.log(description, title, headerBG, landing, brandName, button)} */}
      <div className="heading__content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {/* {landing && <Link to={`/brands/${brandName}/landing`}>Learn more</Link>} */}
        {button && <CheckOut to={button.url}>{button.label}</CheckOut>}
      </div>
    </HeaderWrapper>
  );
};
Header.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerBG: PropTypes.string,
  landing: PropTypes.bool,
  brandName: PropTypes.string,
  button: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
};

Header.defaultProps = {
  headerBG: "",
  landing: false,
  brandName: "Test",
  button: null,
};

export default Header;
