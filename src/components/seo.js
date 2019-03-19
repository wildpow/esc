import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import logo from "../images/logo.png";

const SEO = ({
  title,
  description,
  ogTitle,
  ogImageAlt,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogURL,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="E.S.C. Mattress Center" />
      <meta
        property="og:url"
        content={ogURL || "https://www.escmattresscenter.com/"}
      />
      <meta property="og:image" content={ogImage || logo} />
      <meta property="og:image:width" content={ogImageWidth || "1200"} />
      <meta property="og:image:height" content={ogImageHeight || "627"} />
      <meta
        property="og:image:alt"
        content={ogImageAlt || "E.S.C Mattress Center's logo of a panda"}
      />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  ogImageAlt: "E.S.C Mattress Center's logo of a panda",
  ogImage: logo,
  ogImageWidth: "1200",
  ogImageHeight: "627",
  ogURL: "https://www.escmattresscenter.com/",
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogImageAlt: PropTypes.string,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.string,
  ogImageHeight: PropTypes.string,
  ogURL: PropTypes.string,
};
export default SEO;
