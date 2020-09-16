import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  radius,
  colors,
  spacing,
  fontSize,
  breakpoints,
} from "../../utils/styles";

const ContactRoot = styled.aside`
  border-radius: ${radius.large};
  border: 1px solid ${colors.gray["500"]};
  position: relative;
  padding: ${spacing[1]};
  padding-top: ${spacing[8]};
  /* margin-bottom: 20px; */
  address {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  h4,
  h5 {
    margin: 0;
  }
  h4 {
    position: absolute;
    left: 5%;
    background: white;
    padding: 5px 20px;
    background: ${colors.blue[900]};
    color: white;
    border: 1px solid ${colors.gray["400"]};
    top: -14px;
    z-index: 1;
    /* margin-bottom: 10px; */
  }
  h5 {
    font-size: ${fontSize.lg};
    border-bottom: 4px solid #9b2c2c;
  }

  address div {
    width: 240px;
    padding: 10px;
    padding-right: 15px;
    padding-left: 15px;
    font-style: normal;
    h5 {
      margin-bottom: 5px;
    }
    p {
      margin: 0;
      font-size: ${fontSize.base};
      line-height: ${spacing[5]};
    }
  }

  /* @media (min-width: 375px) {
    address div {
      padding-top: 10px;
      padding-right: 0px;
      padding-left: 0px;
      padding-bottom: 10px;
    }
  } */

  /* @media (min-width: ${breakpoints.phablet}) {
    address div {
      padding: 10px;
      padding-right: 15px;
      padding-left: 15px;
    }
  } */
  @media (min-width: ${breakpoints.sm}) {
    padding: ${spacing[4]};
    padding-top: ${spacing[10]};
  }
  @media (min-width: ${breakpoints.xl}) {
    h4 {
      font-size: ${fontSize.xl};
    }
    h5 {
      font-size: ${fontSize.xl};
    }
    address div p {
      font-size: ${fontSize.lg};
      line-height: ${spacing[6]};
    }
  }
`;

const ContactInfo = () => {
  return (
    <ContactRoot>
      <h4>Contact Info</h4>
      <address>
        <div>
          <h5>Address</h5>
          <p>
            10121 Evergreen Way,
            <br />
            #30 Everett, WA 98204
          </p>
        </div>
        <div>
          <h5>Hours</h5>
          <p>
            Mon-Sat: 10am - 7pm
            <br />
            Sunday: 10am - 6pm
          </p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>(425) 512-0017</p>
        </div>
        <div>
          <h5>Links</h5>
          <p>
            <Link to="/policies">Terms/Policies</Link>
            <br />
            <Link to="/warranty"> Warranty Info</Link>
          </p>
        </div>
      </address>
    </ContactRoot>
  );
};

export default ContactInfo;
