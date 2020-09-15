import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

import Img from "gatsby-image";
import Layout from "../components/Layout";
import {
  spacing,
  breakpoints,
  fonts,
  colors,
  fontSize,
  radius,
  boxShadow,
} from "../utils/styles";
import ContactUsForm from "../components/Contact-Us/ContactUsForm";

const Content = styled.div`
  background-color: white;
  max-width: 1128px;
  margin: 0 auto;
  margin-top: -40px;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: ${boxShadow.lg};
  border-top-left-radius: ${radius.large}px;
  border-top-right-radius: ${radius.large}px;
  padding: ${spacing["3"]};
  color: ${colors.gray["800"]};
  h2 {
    margin-top: 0;
    color: inherit;
    font-size: ${fontSize["2xl"]};
    margin-bottom: 0;
    border-bottom: 4px solid #9b2c2c;
  }
  p {
    font-family: ${fonts.serif};
    line-height: ${spacing["6"]};
    padding-bottom: ${spacing["2"]};
    font-size: ${fontSize.md};
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: ${spacing["10"]};
    /* margin: 0 auto; */
    margin-top: -100px;
    margin-right: 20px;
    margin-left: 20px;
    h2 {
      font-size: ${fontSize["3xl"]};
    }
    p {
      font-size: ${fontSize.xl};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing["4"]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: -100px;
    padding: ${spacing["10"]};
    margin-right: 20px;
    margin-left: 20px;
    /* h2 {
      font-size: ${fontSize[
      "5xl"
    ]};
    }
    p {
      font-size: ${fontSize[
      "2xl"
    ]};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing[
      "6"
    ]};
    } */
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-top: -200px;
    h2 {
      font-size: ${fontSize["5xl"]};
    }
    p {
      font-size: ${fontSize["2xl"]};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing["6"]};
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    margin: 0 auto;
    margin-top: -200px;
  }
`;
const ContactUsRoot = styled.section`
  /* padding-top: ${spacing["1"]}; */
  position: relative;
  padding-bottom: ${spacing["10"]};
  font-family: ${fonts.sans};
  @media (min-width: ${breakpoints.sm}) {
    padding-top: ${spacing["4"]};
  }
  h3 {
    border-bottom: 4px solid #9b2c2c;
    font-size: ${fontSize["2xl"]};
  }
`;
const AddressRoot = styled.aside`
  border-radius: ${radius.large};
  border: 1px solid ${colors.gray["300"]};

  position: relative;
  padding: ${spacing["6"]};
  margin-bottom: 20px;
  h4,
  h5 {
    margin: 0;
  }
  h4 {
    position: absolute;
    left: 5%;
    background: white;
    padding: 0 20px;
    border: 1px solid ${colors.gray["400"]};
    top: -10px;
    z-index: 1;
    /* margin-bottom: 10px; */
  }
  address {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
  .address-wrap {
    display: flex;
    justify-content: space-around;
    div {
      width: 175px;
    }
  }
`;
const ContactUs = ({ data }) => {
  const { fluid } = data.file.childImageSharp;
  return (
    <Layout>
      <ContactUsRoot>
        <Img fluid={fluid} />
        <Content>
          <h2>Contact Us</h2>
          <p>
            Thank you for visiting ESC Mattress Center, Snohomish County&apos;s
            favorite mattress store. We strive to be the best mattress store we
            can be and are always here to help. Feel free to contact us in
            person at the store during normal business hours, by phone, or
            through the form below. Sleep well!
          </p>
          <AddressRoot>
            <h4>Contact Info</h4>
            <address>
              <div className="address-wrap">
                <div>
                  <h5>Address</h5>
                  10121 Evergreen Way,
                  <br />
                  #30 Everett, WA 98204
                  <br />
                </div>
                <div>
                  <h5>Hours</h5>
                  Mon-Sat: 10am - 7pm
                  <br />
                  Sunday: 10am - 6pm
                </div>
              </div>
              <div className="address-wrap">
                <div>
                  <h5>Phone</h5>
                  (425) 512-0017
                </div>
                <div>
                  <h5>Links</h5>

                  <Link to="/policies">Terms/Policies</Link>
                  <br />
                  <Link to="/warranty"> Warranty Info</Link>
                </div>
              </div>
            </address>
          </AddressRoot>
          <h3 className="message">How can We help?</h3>
          <ContactUsForm />
        </Content>
      </ContactUsRoot>
    </Layout>
  );
};

export const contactUsQuery = graphql`
  query {
    file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactUs;
