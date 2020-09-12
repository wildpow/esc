import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
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
    padding: ${spacing["12"]};
    /* margin: 0 auto; */
    margin-top: -100px;

    h2 {
      font-size: ${fontSize["5xl"]};
    }
    p {
      font-size: ${fontSize["2xl"]};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing["6"]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: -200px;
  }
  @media (min-width: ${breakpoints.lg}) {
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
          {/* <div>
            <p>10121 Evergreen Way, #30, Everett, WA 98204</p>
            <p>hours: Mon-Sat: Sunday: 10am - 7pm 10am - 6pm</p>
            <p>Phone: (425) 512-0017</p>
          </div> */}
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
