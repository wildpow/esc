import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { ContactUsRoot, Content } from "./contact-us";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import TopBlogPosts from "../components/Contact-Us/TopBlogPosts";

const ThankYou = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <ContactUsRoot>
        <Img fluid={panda.childImageSharp.fluid} />
        <Content>
          <h2>Thank you for getting in touch!</h2>
          <p>
            We appreciate you contacting us at E.S.C Mattress Center. One of our
            colleagues will get back in touch with you soon! Have a great day!
          </p>
          <ContactInfo />
          <h3 className="message">Check out some of our blog posts.</h3>
          <TopBlogPosts />
        </Content>
      </ContactUsRoot>
    </Layout>
  );
};

export const ThankYouQuery = graphql`
  query {
    panda: file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seo: datoCmsSeo(name: { eq: "thank you" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
