import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
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
import ContactInfo from "../components/Contact-Us/ContactInfo";

export const Content = styled.div`
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
    color: ${colors.blue[900]};
    font-size: ${fontSize["2xl"]};
    margin-bottom: 0;
    border-bottom: 4px solid #9b2c2c;
  }
  p {
    font-family: ${fonts.serif};
    line-height: ${spacing["6"]};
    padding-bottom: ${spacing["2"]};
    font-size: ${fontSize.md};
    color: ${colors.gray[800]};
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: ${spacing["10"]};
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
export const ContactUsRoot = styled.section`
  /* padding-top: ${spacing["1"]}; */
  position: relative;
  padding-bottom: ${spacing["10"]};
  font-family: ${fonts.sans};
  @media (min-width: ${breakpoints.sm}) {
    padding-top: ${spacing["4"]};
  }
  h3 {
    color: ${colors.blue[900]};
    border-bottom: 4px solid #9b2c2c;
    font-size: ${fontSize["2xl"]};
  }
  @media (min-width: ${breakpoints.xl}) {
    h3 {
      font-size: ${fontSize["3xl"]};
    }
  }
`;

const ContactUs = ({ data }) => {
  const { panda, seo } = data;

  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <ContactUsRoot>
        <Img fluid={panda.childImageSharp.fluid} />
        <Content>
          <h2>Contact Us</h2>
          <p>
            Thank you for visiting ESC Mattress Center, Snohomish County&apos;s
            favorite mattress store. We strive to be the best mattress store we
            can be and are always here to help. Feel free to contact us in
            person at the store during normal business hours, by phone, or
            through the form below. Sleep well!
          </p>
          <ContactInfo />
          <h3 className="message">How can We help?</h3>
          <ContactUsForm />
        </Content>
      </ContactUsRoot>
    </Layout>
  );
};

export const contactUsQuery = graphql`
  query {
    panda: file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seo: datoCmsSeo(name: { eq: "contact us" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

ContactUs.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default ContactUs;
