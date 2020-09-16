import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { ContactUsRoot, Content } from "./contact-us";

const ThankYouRoot = styled.section``;

const ThankYou = ({ data }) => {
  const { test } = data;
  const { test2 } = data;
  return (
    <Layout>
      <ContactUsRoot>
        <Img fluid={test.childImageSharp.fluid} />
        <Content>
          <h2>Thank you for getting in touch!</h2>
          <p>
            We appreciate you contacting us at E.S.C Mattress Center. One of our
            colleagues will get back in touch with you soon! Have a great day!
          </p>
        </Content>
      </ContactUsRoot>
    </Layout>
  );
};

export const ThankYouQuery = graphql`
  query {
    test: file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    test2: file(relativePath: { eq: "ContactUsHeader.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
