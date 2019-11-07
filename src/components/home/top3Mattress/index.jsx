import React from "react";
import styled from "styled-components";
import { Wrapper, MainWrapper } from "../../mattressList/mattList.styles";
import { P, Headline, FooterLink } from "../../../styles/homeStyles";
import MattressThumb from "../../mattressList/mattThumbNail";
import useTop3 from "./useTop3";

const NewWrapper = styled(MainWrapper)`
  background-color: ${props => props.theme.newColor1};

  margin-top: 15px;
  @media (min-width: 1024px) {
    box-shadow: ${props => props.theme.newBoxShadow};
  }
`;

const ThreeMattWrapper = styled(Wrapper)`
  margin-bottom: 10px;
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
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;

const TopThreeMatts = () => {
  const { header, mattresses, footerUrl, footer } = useTop3();
  return (
    <NewWrapper>
      <Headline>{header}</Headline>
      <ThreeMattWrapper>
        {mattresses.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))}
      </ThreeMattWrapper>
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
    </NewWrapper>
  );
};

export default TopThreeMatts;
