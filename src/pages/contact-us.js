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
  margin-top: -200px;
  position: relative;
  height: 500px;
  box-shadow: ${boxShadow.lg};
  border-top-left-radius: ${radius.large}px;
  border-top-right-radius: ${radius.large}px;
  padding: 20px;
  color: ${colors.gray["800"]};
  h2 {
    margin-top: 0;
    color: inherit;
    font-size: ${fontSize["4xl"]};
    margin-bottom: 0;
  }
  p {
    font-family: ${fonts.serif};
    line-height: ${spacing["6"]};
  }
`;
const ContactUsRoot = styled.section`
  padding-top: ${spacing["4"]};
  position: relative;
  padding-bottom: ${spacing["10"]};
  font-family: ${fonts.sans};
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
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
