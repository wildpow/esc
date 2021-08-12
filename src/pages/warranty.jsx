import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import HeroCard from "../components/HeroCard";
import {
  breakpoints,
  colors,
  fonts,
  fontSize,
  spacing,
} from "../styles/theme.styled";
import { Title, InfoPara } from "../styles/warranty-policy.styled";

const SecondTitle = styled.h3`
  margin: 0;
  font-family: ${fonts.sans};
  padding-bottom: ${spacing[2]};
  font-size: ${fontSize["2xl"]};
  line-height: 1.5rem /* 24px */;
  font-weight: 500;
  border-bottom: 4px solid ${colors.red[800]};
  color: ${colors.gray[700]};
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${fontSize["3xl"]};
    line-height: 2.25rem /* 36px */;
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
        <SecondTitle>
          To initiate a mattress warranty claim you may contact your mattress
          manufacturer via the phone number below.
        </SecondTitle>
        <div className="flex flex-col justify-center">
          <h4>Sealy Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-800-697-3259">1-800-697-3259</OutboundLink>

          <h4>Stearns & Foster Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-866-783-2767">1-866-783-2767</OutboundLink>

          <h4>Tempur-PEDIC Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-800-821-6621">1-800-821-6621</OutboundLink>
        </div>
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
