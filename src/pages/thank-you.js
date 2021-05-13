import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {
  ContactUsRoot,
  Content,
} from "../components/Contact-Us/contactUs.styled";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import TopBlogPosts from "../components/Contact-Us/TopBlogPosts";

const ThankYou = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <ContactUsRoot>
        <GatsbyImage image={getImage(panda.childImageSharp)} />
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

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
