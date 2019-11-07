import React from "react";
import TopPromo from "./TopPromo";
import { Top, Wrapper, OutBoundLink, BR } from "./topper.styles";
import { TopperNumber } from "../../../../styles/_pr1nt/main";

const Topper = ({ menuToggle }) => (
  <>
    <TopperNumber>Call: (425)-512-0017</TopperNumber>
    <Top menuToggle={menuToggle}>
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
  </>
);

export default Topper;
