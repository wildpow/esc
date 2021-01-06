import React from "react";
import styled, { css } from "styled-components";
import Popup from "reactjs-popup";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";
import "reactjs-popup/dist/index.css";
import { ListPr1nt, DisplayNonePr1nt } from "../../styles/_pr1nt/main";
import { colors, fonts, boxShadow } from "../../utils/styles";
import { FadeIn } from "../../styles/mainStyles";
import "./css.css";
import DownArrow from "../../assets/arrow-down-solid.svg";

const Popper = styled.div`
  transition: all 0.25s ease-in-out;
  opacity: 1;
  animation-name: ${FadeIn};
  display: flex;
  justify-content: center;
  /* box-shadow: ${boxShadow.md}; */
  .button {
    font-family: ${(props) => props.theme.MainFont1};
    color: #000000;
    cursor: pointer;
    padding: 0px 30px;
    display: inline-block;
    margin: 10px 15px;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 1.5px;
    font-size: 1em;
    outline: none;
    position: relative;
    font-size: 14px;
    font-weight: 700;
    border: 3px solid ${colors.blue[800]};
    background-color: #ffffff;
    border-radius: 15px 15px 15px 15px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    :hover {
      border: 3px solid ${colors.red[800]};
      box-shadow: ${boxShadow.default};
    }
  }
  .modal {
    font-size: 12px;
  }
  .modal > .header {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    font-family: ${fonts.serif};
    border-bottom: 4px solid ${colors.red[800]};
    padding-bottom: 2px;
    font-size: 1.4rem;
    padding-left: 15px;
    font-weight: 400;
    color: ${colors.gray["800"]};
  }
  .modal > .content {
    font-family: ${(props) => props.theme.MainFont1};
    color: ${colors.blue[900]};
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 400;
    width: 100%;
    padding: 10px 15px 10px 15px;
    margin-bottom: 0;
    margin-top: 0;
  }
  .modal > .actions {
    margin: auto;
    background-color: white;
    border-radius: 10px;
  }
  .modal > .actions {
    width: 100%;
    padding: 0px 5px 10px 5px;
    text-align: center;
  }
`;

const Info = styled.li`
  padding-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
  .left,
  .right {
    display: inline-block;
  }
  .left {
    padding-right: 10px;
  }
  .right {
    padding-left: 10px;
  }
  a {
    display: none;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.MainFont1};
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: ${colors.blue["800"]};
    &:hover {
      color: ${colors.red[800]};
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
  .fa-arrow-down {
    width: 14px;
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
    border-bottom: 4px solid ${colors.red[800]};
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
const contentStyle = {
  maxWidth: "600px",
  width: "90%",
  padding: "0px",
  background: "white",
  border: "1px solid lightgray",
  borderRadius: "10px",
};
const OpenButton = styled.button`
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  font-family: ${(props) => props.theme.MainFont2};
  text-decoration: underline;
  /* color: ${(props) => props.theme.mainColor1}; */
  color: ${colors.blue["800"]};

  /* text-align: center; */
  :hover,
  :active {
    color: ${(props) => props.theme.mainColor2};
  }
`;
export default function FeatureList({ list, top, width }) {
  function listItem(item) {
    if (item.description.length < 1) return item.title;
    return (
      <Popup
        closeOnDocumentClick
        position="top center"
        modal={width < 600}
        closeOnEscape
        repositionOnResize
        keepTooltipInside
        contentStyle={contentStyle}
        trigger={
          <OpenButton className="openButton" type="button">
            {item.title}
          </OpenButton>
        }
      >
        {(close) => (
          <Popper>
            <article className="modal">
              <h3 className="header">Feature Description</h3>
              <p className="content">{item.description}</p>
              <div className="actions">
                <button onClick={close} type="button" className="button">
                  close
                </button>
              </div>
            </article>
          </Popper>
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
              <AnchorLink href="#moreInfo">
                <div className="left">
                  <DownArrow />
                </div>
                See more details
                <div className="right">
                  <DownArrow />
                </div>
              </AnchorLink>
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
  width: PropTypes.number.isRequired,
};

FeatureList.defaultProps = {
  top: false,
};
