// import styled from "@emotion/styled";
import { css, styled } from "goober";

import { Link } from "gatsby";
import { P, Headline } from "../home.styled";
import ProductThumbnail from "../../ProductListing/ProductThumbnail";
import useTop3 from "./getTopMattresses.query";
import {
  boxShadow,
  colors,
  // FadeInAnimation,
} from "../../../styles/theme.styled";

const FooterLink = styled(Link)`
  text-decoration-color: white;
  transition: all 0.25s ease-in;
  color: white;
  :hover {
    transform: scale(1.04);
    text-decoration-color: ${colors.gray["500"]};
  }
`;

// ${FadeInAnimation}

const TopMattressRoot = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${colors.white};
  margin-top: 15px;
  @media (min-width: 1024px) {
    box-shadow: ${boxShadow.md};
  }
`;

const MattWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 1rem;
  margin-left: 7px;
  margin-right: 7px;
  @media (min-width: 375px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  @media (min-width: 411px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media (min-width: 568px) {
    margin-bottom: 5px;
  }
  @media (min-width: 731px) {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1024px) {
    margin-bottom: 10px;
  }
  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;

const TopThreeMatts = () => {
  const { header, newmattress, footerUrl, footer } = useTop3();
  const sortedMatt = newmattress.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
  return (
    <div className={TopMattressRoot}>
      <Headline>{header}</Headline>
      <div className={MattWrapper}>
        {sortedMatt.map((mattress) => (
          <ProductThumbnail
            key={mattress.id}
            product={mattress}
            mattress
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))}
      </div>
      <P>
        We believe that no mattress is a one-size-fits-all solution, which is
        why we have over 50 mattresses to choose from at our Everett location.
        If you’d like to browse our current sale mattresses you can click below,
        or visit our showroom on Everett Mall Way. With a combined 25 years of
        experience helping people find the right mattress for their sleep needs
        we’re here to help you start sleeping better.
      </P>
      <Headline red>
        <FooterLink to={footerUrl}>{footer}</FooterLink>
      </Headline>
    </div>
  );
};

export default TopThreeMatts;
