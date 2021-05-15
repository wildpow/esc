import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, spacing, boxShadow, fonts } from "../../styles/theme.styled";
import { PrimaryButton } from "../../styles/buttons.old.styled";

const HeaderButton = styled(PrimaryButton)`
  font-size: 1.25rem;
  padding: ${spacing[4]};
  margin: 0;
  margin-bottom: 10px;
  margin-right: 10px;
  transition: all 0.2s ease;
  :hover {
    background: ${colors.red[800]};
  }
`;

const HeaderWrapper = styled.div`
  margin-top: 0px;
  box-shadow: ${boxShadow.md};
  margin-bottom: 10px;
  display: flex;
  background-size: cover;
  background-color: white;
  flex-direction: column;
  background: white;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  font-family: ${fonts.sans};

  .heading__content {
    display: flex;
    /* new stuff */
    align-items: center;
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
    border-bottom: 4px solid ${colors.brandRed};
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
    font-family: ${fonts.serif};
    padding-right: 10px;
    padding-left: 10px;
    font-weight: 700;
  }
  @media screen and (min-width: 360px) {
    background: linear-gradient(
        rgba(247, 250, 252, 0.85),
        rgba(247, 250, 252, 0.45)
      ),
      url(${(props) => props.headerBG}) no-repeat;
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
      url(${(props) => props.headerBG}) no-repeat;

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
    background: url(${(props) => props.headerBG}) no-repeat;
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
const ListingHeader = ({ description, title, headerBG, button }) => (
  <HeaderWrapper headerBG={headerBG}>
    <div className="heading__content">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {button && <HeaderButton to={button.url}>{button.label}</HeaderButton>}
    </div>
  </HeaderWrapper>
);
ListingHeader.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerBG: PropTypes.string,
  button: PropTypes.shape({ label: PropTypes.string, url: PropTypes.string }),
};

ListingHeader.defaultProps = {
  headerBG: "",
  button: null,
};

export default ListingHeader;
