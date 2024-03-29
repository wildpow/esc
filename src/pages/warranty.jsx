import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import HeroCard from "../components/HeroCard";
import {
  boxShadow,
  breakpoints,
  colors,
  fonts,
  fontSize,
  rounded,
  spacing,
} from "../styles/theme.styled";
import { Title, InfoPara } from "../styles/warranty-policy.styled";

const ContentSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${fonts.sans};
  max-width: 665px;
  margin: ${spacing[2]} auto;
  margin-top: ${spacing[2]};
  padding-bottom: ${spacing[6]};
  border: 2px solid ${colors.gray[500]};
  border-radius: ${rounded.default};
  align-items: center;
  box-shadow: ${boxShadow.sm};
  h3 {
    padding: ${spacing[3]};
    font-weight: 400;
    text-align: center;
    margin: 0;
    font-size: ${fontSize.base};
    line-height: 1.35rem /* 32px */;
    color: ${colors.gray[100]};
    background-color: ${colors.blue[800]};
    border-bottom: 2px solid ${colors.gray[500]};
  }
  h4 {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${colors.gray[700]};
    font-weight: 500;
    border-bottom: 4px solid ${colors.red[800]};
    font-size: ${fontSize.base};
    margin-bottom: ${spacing[2]};
    /* align-self: flex-start; */
  }
  a {
    color: ${colors.blue[800]};
    font-size: ${fontSize.base};
    transition: all 0.2s ease;
    :hover {
      color: ${colors.red[700]};
    }
  }
  @media (min-width: 400px) {
    h4 {
      flex-direction: row;
      span {
        padding-left: 3px;
      }
    }
  }
  @media (min-width: ${breakpoints.sm}) {
    h3 {
      padding-top: ${spacing[3]};
      padding-bottom: ${spacing[3]};
      font-size: ${fontSize.lg};
    }
    h4 {
      font-size: ${fontSize.lg};
    }
    a {
      font-size: ${fontSize.lg};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    h3 {
      font-size: ${fontSize.xl};
      line-height: 2rem /* 32px */;
    }
    h4 {
      font-size: ${fontSize.xl};
    }
    a {
      font-size: ${fontSize.xl};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    h3 {
      font-size: ${fontSize["2xl"]};
    }
    h4 {
      font-size: ${fontSize["2xl"]};
    }
    a {
      font-size: ${fontSize["2xl"]};
    }
  }
`;
const Warranty = ({ data }) => {
  const { seo, hero } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <HeroCard
        alt="Pile of pages representing warranty information for products purchased at E.S.C. Mattress Center "
        image={hero.childImageSharp.gatsbyImageData}
      >
        <Title className=" heading-underline sm:text-3xl lg:text-5xl border-lightBlue-700 text-blueGray-800 mb-7">
          Mattress Warranty Information
        </Title>

        <InfoPara>
          Warranty requirements are determined by the manufacturer and details
          will be set forth in the warranty card attached to your new mattress
          set. All warranty claims will be handled through the manufacturer.
          Please read the warranty card for requirements and instructions.
        </InfoPara>
        <InfoPara>
          The four things to be aware of that will void a mattress warranty are:
          improper support from the frame, improper support from the foundation,
          stains and soils, or removing the law label. Remember, body
          impressions up to 1-1/2” are a considered a normal occurrence with any
          new mattress and is not an indication of structural failure. The
          comfort layer of the mattress is simply contouring to your natural
          curves, to give you the proper support and comfort that your body
          needs.
        </InfoPara>
        <ContentSection>
          <h3>
            To initiate a mattress warranty claim you may contact your mattress
            manufacturer via the phone number below.
          </h3>
          <h4>
            Sealy Mattress <span>Warranty Service</span>
          </h4>
          <OutboundLink href="tel:1-800-697-3259">1-800-697-3259</OutboundLink>

          <h4>
            Stearns & Foster Mattress <span>Warranty Service</span>
          </h4>
          <OutboundLink href="tel:1-866-783-2767">1-866-783-2767</OutboundLink>

          <h4>
            Tempur-PEDIC Mattress <span>Warranty Service</span>
          </h4>
          <OutboundLink href="tel:1-800-821-6621">1-800-821-6621</OutboundLink>
        </ContentSection>
      </HeroCard>
    </Layout>
  );
};

Warranty.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const warrantySEO = graphql`
  query warrantySEO {
    hero: file(relativePath: { eq: "warranty_policy.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AVIF, WEBP, JPG, AUTO]
          layout: CONSTRAINED
          width: 1536
          height: 415
        )
      }
    }
    seo: datoCmsSeo(name: { eq: "warranty" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Warranty;
