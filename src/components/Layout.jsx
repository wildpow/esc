import PropTypes from "prop-types";
import WindowSizeProvider from "../contexts/WindowSize.ctx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GlobalStyle from "../styles/global.styled";
import { breakpoints } from "../styles/theme.styled";

export default function Layout({ children }) {
  return (
    <WindowSizeProvider>
      <GlobalStyle />
      <div style={{ margin: "0 auto", maxWidth: breakpoints["2xl"] }}>
        {children}
      </div>
    </WindowSizeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
