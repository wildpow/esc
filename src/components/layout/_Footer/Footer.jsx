import React from "react";
import styled from "styled-components";
import {
  breakpoints,
  colors,
  spacing,
  fontSize,
  fonts,
} from "../../../utils/styles";

const FooterRoot = styled.footer`
padding-right: 20px;
padding-left: 20px;
  position: sticky;
  bottom: 0;
  left: 0;
  padding-top: 40px;
  /* width: 100%; */
  color: ${colors.white};
  background-color: ${colors.blue["900"]};
  /* border-top: 10px solid ${colors.red["700"]}; */
  height: 300px;
  h1 {
    margin: 0;
    font-size: 100px;
  }
  .topWrapper {
    width: 100%;
    display: flex;
    /* height: 200px; */
    section {
      flex: 1;
      h3 {
        font-weight: 500;
        font-family: ${fonts.sans};
        text-transform: uppercase;
      }
     
    }
  }
  .middleWrapper {
    display: flex;
  }


  transition: 0.75s;
  will-change: transform;
  @media (min-width: ${breakpoints.sm}) {
    transform: translateX(0);
    &.moved {
      filter: blur(1px);
      transform: translateX(-400px);
    }
  }
`;

const Footer = ({ moved }) => {
  return (
    <FooterRoot className={moved}>
      <div className="topWrapper">
        <section>
          <h3>Our Mission</h3>
        </section>
        <section>
          <div>
            <h3>Stay Connected</h3>
          </div>
          <div>
            <h3>Hours</h3>
          </div>
        </section>
        <section>
          <h3>Navigate</h3>
          <div>
            <ul>
              <li>
                <a href="" />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className="middleWrapper">
        <h4>E.S.C. Mattress Center</h4>
        <div>10121 Evergreen Way, #30, Everett, WA 98204</div>
        <a href="#">Map</a>
        <div>
          Main <a href="#">(425) 512.0017</a>
        </div>
      </section>
      <section>
        <a href="#">Terms/Policies</a>
        <a href="#">Warranty Info</a>
        <small>&copy; 2020 E.S.C. Mattress Center</small>
      </section>
    </FooterRoot>
  );
};

export default Footer;
