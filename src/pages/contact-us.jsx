import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ContactUsForm from "../components/Contact-Us/ContactUsForm";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import {
  Content,
  ContactUsRoot,
} from "../components/Contact-Us/contactUs.styled";

const ContactUs = ({ data }) => {
  const { panda, seo } = data;

  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <ContactUsRoot>
        <GatsbyImage image={getImage(panda.childImageSharp)} />
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
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1536
        )
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
