import React from "react";
import PropTypes from "prop-types";
import { OutBoundLink, BR, InboundLink } from "./Topper.styles";
import { TopperNumber } from "../../styles/_pr1nt/main";
import TopperContainer from "./Topper.container";
import useTopperPromo from "./Topper.query";

const Topper = ({ menuToggle }) => {
  const { internalLink, url, urlText } = useTopperPromo();
  return (
    <>
      <TopperNumber />
      <TopperContainer menuToggle={menuToggle}>
        {internalLink ? (
          <InboundLink to={url}>{urlText}</InboundLink>
        ) : (
          <OutBoundLink
            href="https://subscribe.mainstreethub.com/email/b1278150-e6a6-4cd5-8708-d72ade6c099a"
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlText}
          </OutBoundLink>
        )}
        <OutBoundLink href="tel:1-425-512-0017">
          Call:
          <BR />
          (425)-512-0017
        </OutBoundLink>
      </TopperContainer>
    </>
  );
};

Topper.propTypes = {
  menuToggle: PropTypes.bool.isRequired,
};
export default Topper;
