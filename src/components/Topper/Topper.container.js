import React from "react";
import { Flex } from "rebass";
import PropTypes from "prop-types";

const TopperContainer = props => {
  const { menuToggle } = props;
  return (
    <Flex
      {...props}
      justifyContent="space-between"
      sx={{
        width: menuToggle ? "100vw" : "initial",
        zIndex: 23,
        position: "relative",
        fontSize: [2, 3, 4],
        fontWeight: "body",
        backgroundColor: "brandRed",
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
    />
  );
};

TopperContainer.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
};

export default TopperContainer;
