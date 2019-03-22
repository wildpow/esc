import React from "react";
import TopPromo from "./TopPromo";
import { Top, Wrapper, OutBoundLink, BR } from "../styles/topperStyles";

const Topper = () => (
  <Top>
    <Wrapper Left>
      <TopPromo />
    </Wrapper>
    <Wrapper Right>
      <OutBoundLink href="tel:1-425-512-0017">
        Call:
        <BR />
        {` `}
        (425)-512-0017
      </OutBoundLink>
    </Wrapper>
  </Top>
);

export default Topper;
