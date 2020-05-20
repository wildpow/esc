// import React from "react";
// import { graphql } from "gatsby";
// import PropTypes from "prop-types";
// import Layout from "../../components/layout";
// import Landing from "../../components/landing";
// import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";

// const Malouf = ({ data }) => {
//   return (
//     <Layout>
//       <BreadWrapper Brands>
//         <BreadCrumbs next="Brands" here="Malouf" />
//       </BreadWrapper>
//       <Landing data={data.datoCmsLanding} />
//       <BreadWrapper Brands>
//         <BreadCrumbs next="Brands" here="Malouf" />
//       </BreadWrapper>
//     </Layout>
//   );
// };

// Malouf.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
// };
// export const landingPage = graphql`
//   query landingPage {
//     datoCmsLanding(title: { eq: "stearns" }) {
//       ...landing
//     }
//   }
// `;
// export default Malouf;
