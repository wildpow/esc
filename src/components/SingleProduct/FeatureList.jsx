import React from "react";
import styled, { css } from "styled-components";
import Popup from "reactjs-popup";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";
// import "reactjs-popup/dist/index.css";
import { ListPr1nt, DisplayNonePr1nt } from "../../styles/_pr1nt/main";
import { colors } from "../../utils/styles";

const Info = styled.li`
  padding-top: 10px;
  list-style: none;
  a {
    display: none;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.MainFont1};
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: ${colors.red["500"]};
    &:hover {
      color: ${(props) => props.theme.mainColor1};
    }
    @media (orientation: landscape) {
      display: block;
    }
    @media (min-width: 568px) {
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      display: block;
      font-size: 1.2rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
    ${DisplayNonePr1nt}
  }
`;

const BottomList = css`
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
    }
    ul {
      font-size: 1.6rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${(props) => props.theme.MainFont3};
  font-weight: 400;
  margin-left: 5px;
  color: ${(props) => props.theme.newColor2};
  padding: 0px;
  h3 {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0;
    color: ${colors.blue["900"]};
    border-bottom: 4px solid ${(props) => props.theme.mainColor2};
    padding-bottom: 2px;
    padding-left: 20px;
  }
  ul {
    list-style: square;
    margin-top: 2px;
    font-size: 0.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  ul li {
    padding-bottom: 2px;
    color: ${colors.gray["700"]};
  }

  @media (min-width: 360px) {
    ul {
      margin-top: 10px;
      font-size: 1rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 550px) {
    padding: 0px 0px 0px 10px;
    h3 {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${(props) => props.theme.mainColor2};
      padding-bottom: 2px;
      padding-left: 20px;
    }
    ul {
      list-style: square;
      margin-top: 10px;
    }
    ul li {
      padding-bottom: 4px;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0px 30px 10px 30px;

    h3 {
      padding-left: 20px;
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1300px) {
    h3 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 2.1rem;
    }
  }
  ${ListPr1nt}
  ${({ top }) => !top && BottomList}
`;
export default function FeatureList({ list, top }) {
  function listItem(item) {
    if (item.description.length < 1) return item.title;
    return (
      <Popup
        closeOnDocumentClick
        position="top center"
        // modal
        closeOnEscape
        repositionOnResize
        keepTooltipInside
        // contentStyle={contentStyle}
        trigger={<button type="button">{item.title}</button>}
      >
        {(close) => (
          <div>
            {console.log(item.description.length)}
            <h3>Feature Description</h3>
            <p>{item.description}</p>
            <button onClick={close} type="button">
              close
            </button>
          </div>
        )}
      </Popup>
    );
  }
  return (
    <>
      <List top>
        <h3>{top ? "Features" : "Key Features"}</h3>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{listItem(item)}</li>
          ))}
          {top && (
            <Info>
              <AnchorLink href="#moreInfo">See more details</AnchorLink>
            </Info>
          )}
        </ul>
      </List>
    </>
  );
}

FeatureList.propTypes = {
  top: PropTypes.bool,
  list: PropTypes.instanceOf(Object).isRequired,
};

FeatureList.defaultProps = {
  top: false,
};
