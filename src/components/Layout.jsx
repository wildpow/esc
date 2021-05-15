import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GlobalStyle from "../styles/global.styled";
import { breakpoints } from "../styles/theme.styled";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <div style={{ margin: "0 auto", maxWidth: breakpoints["2xl"] }}>
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
