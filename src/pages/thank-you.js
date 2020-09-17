import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { ContactUsRoot, Content } from "./contact-us";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import TopBlogPosts from "../components/Contact-Us/TopBlogPosts";

const ThankYou = ({ data }) => {
  const { test, test2, clean, win, clothes, tips } = data;
  return (
    <Layout>
      {console.log(data)}
      <ContactUsRoot>
        <Img fluid={test.childImageSharp.fluid} />
        <Content>
          <h2>Thank you for getting in touch!</h2>
          <p>
            We appreciate you contacting us at E.S.C Mattress Center. One of our
            colleagues will get back in touch with you soon! Have a great day!
          </p>
          <ContactInfo />
          <h3 className="message">Check out some of our blog posts.</h3>
          <TopBlogPosts data={[clean, clothes, win, tips]} />
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

    clean: datoCmsBlog(slug: { eq: "the-clean-shop-promise" }) {
      description
      slug
      title
      blogListImage {
        alt
        url
      }
    }
    win: datoCmsBlog(slug: { eq: "esc-mattress-center-wins-again" }) {
      description
      slug
      title
      blogListImage {
        alt
        url
      }
    }
    clothes: datoCmsBlog(slug: { eq: "clothes-for-kids" }) {
      description
      slug
      title
      blogListImage {
        alt
        url
      }
    }
    tips: datoCmsBlog(slug: { eq: "five-mattress-shopping-tips" }) {
      description
      slug
      title
      blogListImage {
        alt
        url
      }
    }
  }
`;

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
