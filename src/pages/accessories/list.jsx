import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import AccessoryList from "../../components/ProductListing/AccessoryList";
import Layout from "../../components/Layout";

const AccessoryListingPage = ({ location, data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <AccessoryList location={location} />
  </Layout>
);
AccessoryListingPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
export const aboutSEO = graphql`
  query accessorySEO {
    datoCmsSeo(name: { eq: "accessories" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default AccessoryListingPage;
