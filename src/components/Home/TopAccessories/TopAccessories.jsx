import React from "react";
import { NewWrapper, ThreeMattWrapper } from "../Top3Mattress/Top3Mattresses";
import { Headline, FooterLink } from "../../../styles/homeStyles";
import AccThumb from "../../Accessories/AccessoryList/AccThumb";

const TopAccessories = ({
  products,
  topAccessoryFooter,
  topAccessoryHeader,
  topAccessoryFooterUrl,
}) => {
  return (
    <NewWrapper>
      <Headline>{topAccessoryHeader}</Headline>
      <ThreeMattWrapper>
        {products.map((item) => (
          <AccThumb acc={item} key={item.shopifyId} />
        ))}
      </ThreeMattWrapper>
      <Headline red>
        <FooterLink to={topAccessoryFooterUrl}>{topAccessoryFooter}</FooterLink>
      </Headline>
    </NewWrapper>
  );
};

export default TopAccessories;
