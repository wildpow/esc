import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { radius, colors, spacing, fontSize } from "../../utils/styles";

const ContactRoot = styled.aside`
  border-radius: ${radius.large};
  border: 1px solid ${colors.gray["500"]};
  position: relative;
  padding-top: ${spacing[10]};
  margin-bottom: 20px;
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
  address {
    display: flex;
    justify-content: space-evenly;
  }
  .address-wrap {
    display: flex;
    width: 50%;
    justify-content: space-around;
    div {
      width: 175px;
      font-style: normal;
      p {
        padding-top: 5px;
        line-height: 1.3em;
        font-size: ${fontSize.base};
        margin: 0;
      }
    }
    div div p {
      font-size: ${fontSize.md};
    }
  }
`;

const ContactInfo = () => {
  return (
    <ContactRoot>
      <h4>Contact Info</h4>
      <address>
        <div className="address-wrap">
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
        </div>
        <div className="address-wrap">
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
        </div>
      </address>
    </ContactRoot>
  );
};

export default ContactInfo;
