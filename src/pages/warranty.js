import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import WarrantyComponent from "../components/Pages/Warranty";

const Warranty = ({ data }) => (
  <Layout>
    <WarrantyComponent seo={data.datoCmsSeo.seoMetaTags} />
  </Layout>
);

Warranty.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const warrantySEO = graphql`
  query warrantySEO {
    datoCmsSeo(name: { eq: "warranty" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Warranty;
