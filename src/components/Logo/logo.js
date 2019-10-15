import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Flex, Image, Heading, Text } from "rebass";
import useLogo from "./Logo.query";

import { H1, Span, StyledLink, ReadersChoice } from "./logoStyles";
import readersChoice from "../../images/ReadersChoiceWinner300x.png";
// test
const Logo = ({ menuToggle }) => {
  const { url, alt } = useLogo();
  return (
    <Flex
      flexDirection="column"
      sx={{
        marginTop: [-18, -20, -22, -88],
      }}
    >
      <Link to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
        <ReadersChoice
          menuToggle={menuToggle}
          src={readersChoice}
          alt="ESC Mattress Center was voted SnoCo best mattress store in Snohomish County"
        />
      </Link>
      <StyledLink to="/">
        <Image
          // color="background"
          sx={{
            // alignSelf: "center",
            transition: "transform 0.25s ease-in",
            zIndex: 3,
            width: [78, 78, 240, 265],
            ":hover": {
              transform: "scale3d(1.05, 1.05, 1)",
              "@media print": {
                "padding-top": "4px",
                height: "5em",
              },
            },
          }}
          src={url}
          alt={alt === null ? "E.S.C Mattress Center Panda logo" : alt}
        />
      </StyledLink>
      <Heading
        fontWeight="heading"
        bg="background"
        as="h1"
        sx={{
          fontSize: [5, 6, 7],
          fontFamily: "heading",
          color: "brandRed",
          textShadow: "text",
          boxShadow: "box",
          alignSelf: "center",
          marginTop: [-26, -32, -39, -45],
          border: "1px solid #eee",
          fontWeight: "heading",
          borderTopLeftRadius: "0.11rem",
          borderTopRightRadius: "0.11rem",
          "@media print": {
            "font-size": "1.6rem",
            "text-shadow": "none",
            "margin-top": "-20px",
            "box-shadow": "none",
          },
        }}
        px="5"
        py="15"
      >
        <Text as="span" sx={{ color: "brandBlue", fontStyle: "italic" }}>
          E.S.C.
        </Text>
        Mattress Center
      </Heading>
    </Flex>
    // <Wrapper>
    //   <Link to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county">
    //     <ReadersChoice
    //       menuToggle={menuToggle}
    //       src={readersChoice}
    //       alt="ESC Mattress Center was voted SnoCo best mattress store in Snohomish County"
    //     />
    //   </Link>
    //   <StyledLink to="/">
    //     <Image
    //       src={url}
    //       alt={alt === null ? "E.S.C Mattress Center Panda logo" : alt}
    //     />
    //   </StyledLink>
    //   <H1>
    //     <Span>E.S.C. </Span>
    //     Mattress Center
    //   </H1>
    // </Wrapper>
  );
};

Logo.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
};

export default Logo;
