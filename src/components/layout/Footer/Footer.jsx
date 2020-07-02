import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import {
  breakpoints,
  colors,
  spacing,
  fontSize,
  fonts,
} from "../../../utils/styles";
import Yelp from "../../../assets/yelp-brands.svg";
import Insta from "../../../assets/instagram-brands.svg";
import Twitter from "../../../assets/twitter-brands.svg";
import FaceBook from "../../../assets/facebook-f-brands.svg";
import useFooterIcons from "./use-footer-icons";
import useReaders from "./use-readers-choice";
import Bird from "./bird";

const FooterRoot = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: ${spacing["5"]};
  padding-left: ${spacing["5"]};
  position: sticky;
  bottom: 0;
  left: 0;
  padding-top: ${spacing["10"]};
  color: ${colors.white};
  background-color: ${colors.blue["900"]};
  /* height: 300px; */
  margin: 0 auto;
  .topWrapper {
    max-width: 1224px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    section {
      width: 310px;
      /* height: 300px; */
      h3 {
        font-weight: 500;
        font-family: ${fonts.sans};
        text-transform: uppercase;
      }
    }
  }
  .middleWrapper {
    font-family: ${fonts.sans};
    border-top: 2px solid ${colors.gray["100"]}10;
    display: flex;
    justify-content: center;
    padding: ${spacing["4"]} 0;
    h4 {
      margin: 0;
    }
  }

  transition: 0.75s;
  will-change: transform;
  @media (min-width: ${breakpoints.sm}) {
    transform: translate3d(0vw, 0, 0);
    &.moved {
      /* filter: blur(1px); */
      transform: translate3d(-400px, 0, 0);
    }
  }
  .firstUL {
    padding-left: 0;
  }
  .navlinks {
    display: flex;
    ul {
      list-style: none;
      margin-top: 0;
      li {
        margin: 0;
        /* margin-bottom: 1em; */
        padding-left: 1.3em;
        position: relative;
        padding-bottom: ${spacing["4"]};
        font-family: ${fonts.sans};

        &:after {
          content: "";
          height: 0.25em;
          width: 0.25em;
          background: white;
          display: block;
          position: absolute;
          transform: rotate(45deg);
          top: 0.4em;
          left: 0;
        }
        :hover {
          a {
            border-bottom-color: ${colors.gray["400"]};
            color: white;
          }
          span {
            color: ${colors.gray["900"]};
          }
        }
        a {
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
          :focus {
            box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
            outline: 0;
            transition: box-shadow 0.15s ease-in-out;
          }
          color: ${colors.gray["400"]};
          text-decoration: none;
          font-weight: 300;
        }
        span {
          transition: all 0.2s ease;
          padding-left: ${spacing["4"]};
          font-weight: 300;
          color: ${colors.gray["600"]};
        }
      }
    }
  }

  .social-icons {
    display: flex;
    a {
      padding-right: ${spacing["8"]};
      transition: all 0.2s ease;
      svg {
        width: 35px;
        height: 35px;
        color: white;
      }
      :focus {
        box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
        outline: 0;
        transition: box-shadow 0.15s ease-in-out;
      }
      :hover {
        transform: scale(1.2);
      }
    }
  }
  .bottomWrapper {
    border-top: 2px solid ${colors.gray["100"]}10;
    display: flex;
    justify-content: center;
    padding: ${spacing["4"]} 0;
    font-family: ${fonts.sans};
  }
  .hours {
    font-family: ${fonts.sans};
    justify-self: flex-end;
    h6 {
      /* max-width: 200px; */
      display: flex;
      /* justify-content: space-around; */
      padding-bottom: ${spacing["1"]};
      margin: 0;
    }
  }

  .iconWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .sticker {
    width: 100px;
  }
`;

const Footer = ({ moved }) => {
  const { images } = useFooterIcons();
  const { sticker } = useReaders();
  let bbb;
  let clothsForKids;
  let aquasox;
  images.map((img) => {
    if (img.title === "bbb") bbb = img;
    if (img.title === "aquosox") aquasox = img;
    if (img.title === "clothes_for_kids") clothsForKids = img;
    return null;
  });
  return (
    <FooterRoot className={moved}>
      <div className="topWrapper">
        <section>
          <div>
            <h3>Stay Connected</h3>
            <div className="social-icons">
              <OutboundLink
                href="https://www.facebook.com/ESCMattressCenter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaceBook />
              </OutboundLink>
              <OutboundLink
                href="https://www.yelp.com/biz/esc-mattress-center-everett-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Yelp />
              </OutboundLink>
              <OutboundLink
                href="https://www.instagram.com/centeresc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Insta />
              </OutboundLink>
              <OutboundLink
                href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw"
                data-size="large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </OutboundLink>
            </div>
          </div>
          <div className="hours">
            <h3>Hours</h3>
            <div>
              <h6>
                <span>Mon-Fri:</span>
                <span>10am - 8pm</span>
              </h6>
              <h6>Saturday 10am - 7pm</h6>
              <h6>Sunday 10am - 6pm</h6>
            </div>
          </div>
        </section>
        <section>
          <h3>Navigate</h3>
          <div className="navlinks">
            <ul className="firstUL">
              <li>
                <Link to="/brands">Brands</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/adjustable">Adjustable</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/financing">Financing</Link>
                <span>&gt;</span>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/blog">Our Blog</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/about">About Us</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/current-sale">Current Sale</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
                <span>&gt;</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="topWrapper">
        <section>
          <div>
            <h3>Our Partners</h3>
            <div className="iconWrapper">
              <OutboundLink
                href="https://www.milb.com/everett"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Img
                  fluid={aquasox.fluid}
                  style={{
                    borderRadius: "5px",
                    width: "140px",
                  }}
                  alt={aquasox.alt}
                />
              </OutboundLink>
              <OutboundLink
                href="https://clothesforkids.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={clothsForKids.fluid}
                  style={{
                    borderRadius: "5px",
                    width: "140px",
                  }}
                  alt={clothsForKids.alt}
                />
              </OutboundLink>
            </div>

            {/* <OutboundLink
              href="https://www.bbb.org/northwest/customer-reviews/mattress/esc-mattress-center-in-everett-wa-1000056497/add/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={bbb.fluid} alt={bbb.alt} style={{ width: "120px" }} />
            </OutboundLink> */}
          </div>
        </section>
        <section>
          <div>
            <h3>Reviews / Rewards</h3>
            <div className="iconWrapper">
              <Bird />
              <Link to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
                <img src={sticker.url} alt={sticker.alt} className="sticker" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="middleWrapper">
          <h4>E.S.C. Mattress Center</h4>
          <div>10121 Evergreen Way, #30, Everett, WA 98204</div>
          <a href="#">Map</a>
          <div>
            Main <a href="#">(425) 512.0017</a>
          </div>
        </section>
        <section className="bottomWrapper">
          <a href="#">Terms/Policies</a>
          <a href="#">Warranty Info</a>
          <small>&copy; 2020 E.S.C. Mattress Center</small>
        </section>
      </div>
    </FooterRoot>
  );
};

export default Footer;
