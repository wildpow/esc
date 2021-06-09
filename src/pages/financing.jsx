import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { styled } from "linaria/react";
import Synchrony from "../images/synchrony_Card_Image.jpg";
import Acima from "../images/acima_Logo.png";
import Layout from "../components/Layout";
import {
  FadeInAnimation,
  fonts,
  colors,
  boxShadow,
} from "../styles/theme.styled";

const FinancingBottomText = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 300;
  font-family: ${fonts.sans};
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const ApplyNow = styled.a`
  font-size: 1rem;
  width: 90%;
  text-decoration: none;
  text-align: center;
  padding: 10px 15px 10px 15px;
  background-color: #66ccff;
  font-family: ${fonts.sans};
  color: ${colors.gray["100"]};
  border: none;
  cursor: pointer;
  border-radius: 0.17rem;
  transition: all 0.25s ease-in;
  box-shadow: ${boxShadow.default};
  :hover {
    box-shadow: ${boxShadow.md};
    transform: scale3d(1.05, 1.05, 1);
  }
  @media (min-width: 768px) {
    padding: 10px 15px 10px 15px;
    font-size: 1.2rem;
    width: auto;
  }
  @media (min-width: 1028px) {
    font-size: 1.3rem;
  }
`;
const FinancingFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 25px;
    padding-left: 10px;
  }
`;
const FinancingText = styled.p`
  margin-top: 0;
  align-self: center;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  align-self: flex-start;
  font-family: ${fonts.serif};
  @media (min-width: 360px) {
    padding-left: 7px;
    padding-right: 7px;
  }
  @media (min-width: 411px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 660px) and (max-width: 767px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (min-width: 768px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 1.3rem;
    line-height: 1.7rem;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    line-height: 1.9rem;
  }
  @media (min-width: 1300px) {
    margin-right: 60px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const FinancingContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
const FinancingImg = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 640px) and (max-width: 767px) {
    max-height: 14rem;
  }
  @media (min-width: 768px) {
    align-self: center;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 10px;
    max-height: 12rem;
  }
  @media (min-width: 1024px) {
    align-self: flex-start;
    max-height: 16rem;
  }
`;
const FinancingHeading = styled.h3`
  font-family: ${fonts.sans};
  background-color: ${colors.brandBlue};
  color: ${colors.gray["100"]};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  font-weight: 700;
  @media (min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    text-align: left;
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 1028px) {
    letter-spacing: 0.2rem;
    word-spacing: 0.17rem;
    font-size: 1.4rem;
  }
`;

const MainFinancingRoot = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 20px;
  @media (min-width: 1022px) {
    margin-top: 0px;
    padding-top: 30px;
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

const FinancingCard = styled.article`
  box-shadow: ${boxShadow.md};
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  @media (min-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

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
const BottomFooter = styled(FinancingFooter)`
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;
const Financing = ({ data }) => (
  <Layout>
    <MainFinancingRoot>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <FinancingCard>
        <FinancingHeading>Synchrony Financing</FinancingHeading>
        <FinancingContent>
          <FinancingImg
            src={Synchrony}
            alt="Synchrony Financial logo for E S C mattress center 0% interest financing options"
          />
          <FinancingText>
            We partner with Synchrony Financial to offer 0% interest* financing
            options on approved credit. The Synchrony Home card offers
            convenient monthly payments, 24/7 access to online account
            management, and is accepted at many retailers nationwide.
          </FinancingText>
        </FinancingContent>
        <FinancingFooter>
          <FinancingBottomText>
            *Subject to credit approval. Minimum monthly payments required. See
            store for details.
          </FinancingBottomText>
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
        </FinancingFooter>
      </FinancingCard>
      <FinancingCard style={{ marginBottom: "0px" }}>
        <FinancingHeading>Acima No-Credit Needed</FinancingHeading>
        <FinancingContent>
          <FinancingImg
            src={Acima}
            alt="Acima Financing logo for low or no credit financing options"
          />
          <FinancingText>
            Even if you have low or no credit we partner with Acima No Credit
            Needed to extend Lease to Own options and help you purchase the bed
            of your dreams. With the option to pay off your account in 90-day,
            or take time to repay your account over 12 months with payments
            scheduled to align with your payday.
          </FinancingText>
        </FinancingContent>
        <BottomFooter>
          <ApplyNow
            href="https://www.img-media.net/customer/leases/new?merchant_id=910493"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </ApplyNow>
        </BottomFooter>
      </FinancingCard>
    </MainFinancingRoot>
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
