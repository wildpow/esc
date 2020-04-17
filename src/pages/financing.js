import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import {
  CompanyWrapper,
  H3,
  P,
  InfoWrapper,
  Img,
  BottomP,
  Main,
} from "../styles/financingStyles";
import Synchrony from "../images/synchrony_Card_Image.jpg";
import Acima from "../images/acima_Logo.png";
import Layout from "../components/layout";
import { fadeIn, flexCol, flexRow, themer } from "../styles/mainStyles";
import { ApplyNow } from "../styles/styledComponents";

const Financing = ({ data }) => (
  <Layout>
    <Main className={`${themer} ${fadeIn} ${flexCol}`}>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <CompanyWrapper className={flexCol}>
        <H3>Synchrony Financing</H3>
        <InfoWrapper className={flexRow}>
          <Img
            src={Synchrony}
            alt="Synchrony Financial logo for E S C mattress center 0% interest financing options"
          />
          <P>
            We partner with Synchrony Financial to offer 0% interest* financing
            options on approved credit. The Synchrony Home card offers
            convenient monthly payments, 24/7 access to online account
            management, and is accepted at many retailers nationwide.
          </P>
        </InfoWrapper>
        <footer className={flexRow} style={{ justifyContent: "center" }}>
          <BottomP>
            *Subject to credit approval. Minimum monthly payments required. See
            store for details.
          </BottomP>
        </footer>
      </CompanyWrapper>
      <CompanyWrapper style={{ marginBottom: "0px" }}>
        <H3>Acima No-Credit Needed Financing</H3>
        <InfoWrapper className={flexRow}>
          <Img
            src={Acima}
            alt="Acima Financing logo for low or no credit financing options"
          />
          <P>
            Even if you have low or no credit we partner with Acima Financing to
            extend financing and help you purchase the bed of your dreams. With
            the option to pay off your account in 90-day, or take time to repay
            your account over 12 months with payments scheduled to align with
            your payday.
          </P>
        </InfoWrapper>
        <div>
          <ApplyNow
            href="https://www.img-media.net/customer/leases/new?merchant_id=910493"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </ApplyNow>
        </div>
      </CompanyWrapper>
    </Main>
  </Layout>
);

Financing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const financingSEO = graphql`
  query financingSEO {
    datoCmsSeo(name: { eq: "financing" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Financing;
