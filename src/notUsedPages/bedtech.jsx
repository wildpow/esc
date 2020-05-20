// import React from "react";
// import { graphql } from "gatsby";
// import PropTypes from "prop-types";
// import Layout from "../../components/layout";
// import Landing from "../../components/landing";
// import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";

// const BedTech = ({ data }) => (
//   <Layout>
//     <BreadWrapper Brands>
//       <BreadCrumbs next="Brands" here="BedTech" />
//     </BreadWrapper>
//     <Landing data={data.datoCmsLanding} />
//     <BreadWrapper Brands>
//       <BreadCrumbs next="Brands" here="BedTech" />
//     </BreadWrapper>
//   </Layout>
// );

// BedTech.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
// };

// // Waitng on content!!!
// export const BedTechLandingPage = graphql`
//   query bedTechLandingPage {
//     datoCmsLanding(title: { eq: "tempur" }) {
//       ...landing
//     }
//   }
// `;

// export default BedTech;
