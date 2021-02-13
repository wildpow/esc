import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import ContactUsForm from "../components/Contact-Us/ContactUsForm";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import {
  Content,
  ContactUsRoot,
} from "../components/shared/ContactUs/contactUs.styled";

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
    panda: file(relativePath: { eq: "ContactUsHeader.jpg" }) {
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
