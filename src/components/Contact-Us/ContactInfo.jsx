import React from "react";
import { Link } from "gatsby";
import { css, theme } from "twin.macro";
import fontSize from "../../Old/fontSizes";

const ContactRoot = css`
  border-radius: ${theme`radius.large`};
  border: 1px solid ${theme`colors.gray["500"]`};
  position: relative;
  padding: ${theme`spacing[1]`};
  padding-top: ${theme`spacing[8]`};
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
    background: ${theme`colors.blue[900]`};
    color: white;
    border: 1px solid ${theme`colors.gray["400"]`};
    top: -14px;
    z-index: 1;
  }
  h5 {
    color: ${theme`colors.gray[900]`};
    font-size: ${fontSize.lg};
    border-bottom: 4px solid #9b2c2c;
  }

  address div {
    width: 95%;
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
      line-height: ${theme`spacing[5]`};
      a {
        color: ${theme`colors.blue[700]`};
        transition: color 0.2s ease-in-out;
        :hover {
          color: ${theme`colors.red[700]`};
        }
      }
    }
  }

  @media (min-width: ${theme`screens.phablet`}) {
    address div {
      width: 240px;
    }
  }
  @media (min-width: ${theme`screens.xl`}) {
    h4 {
      font-size: ${fontSize.xl};
    }
    h5 {
      font-size: ${fontSize.xl};
    }
    address div p {
      font-size: ${fontSize.lg};
      line-height: ${theme`spacing[6]`};
    }
  }
`;

const ContactInfo = () => (
  <aside className={ContactRoot}>
    <h4>Contact Info</h4>
    <address>
      <div>
        <h5>Address</h5>
        <p>
          <a
            href="https://goo.gl/maps/nqXkkkAGRdu"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Google maps link to our store"
          >
            10121 Evergreen Way,
            <br />
            #30 Everett, WA 98204
          </a>
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
        <p>
          <a href="tel:1-425-512-0017" aria-label="Store phone number">
            (425) 512-0017
          </a>
        </p>
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
  </aside>
);

export default ContactInfo;
