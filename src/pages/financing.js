import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import {
  CompanyWrapper,
  H3,
  P,
  InfoWrapper,
  Footer,
  CompanyWrapper2,
  Img,
  BottomP,
  ApplyNow,
  Main,
} from "../styles/financingStyles";
import Synchrony from "../images/synchrony_Card_Image.jpg";
import Acima from "../images/acima_Logo.png";
import Layout from "../components/Layout";

const Submit = styled(ApplyNow)`
  background-color: #fbc600;
  color: #3b3c43;
  width: auto;
  width: 100%;
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: auto;
  }
`;
const BottomFooter = styled(Footer)`
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;
const Financing = ({ data }) => {
  return (
    <Layout>
      <Main>
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        <CompanyWrapper>
          <H3>Synchrony Financing</H3>
          <InfoWrapper>
            <Img
              src={Synchrony}
              alt="Synchrony Financial logo for E S C mattress center 0% interest financing options"
            />
            <P>
              We partner with Synchrony Financial to offer 0% interest*
              financing options on approved credit. The Synchrony Home card
              offers convenient monthly payments, 24/7 access to online account
              management, and is accepted at many retailers nationwide.
            </P>
          </InfoWrapper>
          <Footer>
            <BottomP>
              *Subject to credit approval. Minimum monthly payments required.
              See store for details.
            </BottomP>
            <Form
              target="_blank"
              name="eTailAppForm"
              method="post"
              action="https://etail.mysynchrony.com/eapply/eapply.action"
            >
              <input type="hidden" name="mid" value="5348120820045144" />
              <input type="hidden" name="pcgc" value="BY00" />
              <Submit as="input" type="submit" value="APPLY NOW" />
            </Form>
          </Footer>
        </CompanyWrapper>
        <CompanyWrapper2>
          <H3>Acima No-Credit Needed</H3>
          <InfoWrapper>
            <Img
              src={Acima}
              alt="Acima Financing logo for low or no credit financing options"
            />
            <P>
              Even if you have low or no credit we partner with Acima No Credit
              Needed to extend Lease to Own options and help you purchase the
              bed of your dreams. With the option to pay off your account in
              90-day, or take time to repay your account over 12 months with
              payments scheduled to align with your payday.
            </P>
          </InfoWrapper>
          <BottomFooter>
            <ApplyNow
              href="https://www.img-media.net/customer/leases/new?merchant_id=910493"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY NOW
            </ApplyNow>
          </BottomFooter>
        </CompanyWrapper2>
      </Main>
    </Layout>
  );
};

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
