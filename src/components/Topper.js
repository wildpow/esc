import React from "react";
import { Flex } from "rebass";
import TopPromo from "./TopPromo";
import { OutBoundLink, BR } from "../styles/topperStyles";
import { TopperNumber } from "../styles/_pr1nt/main";

const Topper = ({ menuToggle }) => (
  <>
    <TopperNumber />
    <Flex
      justifyContent="space-between"
      sx={{
        width: menuToggle ? "100vw" : "initial",
        zIndex: 23,
        position: "relative",
        fontSize: [2, 3, 4],
        fontWeight: 300,
        backgroundColor: "BrandRed",
        fontFamily: "heading",
        boxShadow: "box",
        textShadow: "text",
        letterSpacing: [1, 3],
        "@media print": {
          display: "none",
        },
      }}
      px={[3, 4]}
      py={[2]}
    >
      <TopPromo />
      <OutBoundLink href="tel:1-425-512-0017">
        Call:
        <BR />
        (425)-512-0017
      </OutBoundLink>
    </Flex>
  </>
);

export default Topper;
