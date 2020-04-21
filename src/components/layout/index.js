import React from "react";
import PropTypes from "prop-types";
import styledNormalize from "styled-normalize";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "./header/logo";
import Navigation from "./header/nav";
import Footer from "./footer";
import Topper from "./header/topper";
import MenuButton from "./mobileMenu/mobileButton";
import Menu from "./mobileMenu/menu";
import StructuredDataMain from "./structuredDataMain";
import ModalContextProvider from "./modalContext";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html {
  box-sizing: border-box;
  
}
*, *:before, *:after {
  box-sizing: inherit;
}
@media print {
  #bf-revz-widget-2576351961{
    display: none;
  }
}
`;

const Body = styled.div`
  background-color: ${props => props.theme.newColor1};
  pointer-events: ${props => (props.outsideMenuEvents ? "none" : "auto")};
  user-select: ${props => (props.outsideMenuEvents ? "none" : "auto")};
  transition: opacity 0.4s ease;
  opacity: ${props => (props.menuToggle ? 0.3 : 1)};
`;
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1370px;
  /* padding-left: 5px;
  padding-right: 5px; */
  /* @media (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    width: 800px;
  }
  @media (min-width: 860px) {
    width: 850px;
  }
  @media (min-width: 900px) {
    width: 880px;
  }
  @media (min-width: 992px) {
    width: 980px;
  }
  @media (min-width: 1100px) {
    width: 1075px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 1300px) {
    width: 1270px;
  }
  @media (min-width: 1400px) {
    width: 1370px;
  } */
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      menuToggle: false,
      outsideMenuEvents: false,
      width: 0,
      // height: 0,
    };
    this.closeonEsc = this.closeonEsc.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.afterAnimation = this.afterAnimation.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("touchstart", this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    const { menuToggle, width } = this.state;
    if (prevState.menuToggle === true && menuToggle === false) {
      this.afterAnimation();
    }
    if (
      width >= 1022 &&
      prevState.width <= 1022 &&
      prevState.menuToggle === true &&
      menuToggle === true
    ) {
      this.onUpdate();
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("touchstart", this.handleClickOutside);
    // clearTimeout(this.afterAnimation);
  }

  onUpdate = () => {
    const { width, menuToggle } = this.state;
    if (width >= 1022 && menuToggle) {
      document.body.style.overflow = "visible";
      document.body.style.position = "initial";
      this.setState({ menuToggle: false, outsideMenuEvents: false });
    }
  };

  handleClickOutside = e => {
    e.stopPropagation();
    if (!this.myRef.current.contains(e.target)) {
      document.body.style.overflow = "visible";
      document.body.style.position = "initial";
      this.setState({ menuToggle: false });
    }
  };

  closeonEsc() {
    document.body.style.overflow = "visible";
    document.body.style.position = "initial";
    this.setState({ menuToggle: false, outsideMenuEvents: false });
  }

  afterAnimation() {
    setTimeout(() => {
      this.setState({ outsideMenuEvents: false });
    }, 400);

    return null;
  }

  handleMenuToggle() {
    const { menuToggle } = this.state;
    if (!menuToggle) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      this.setState({ menuToggle: true, outsideMenuEvents: true });
    } else {
      document.body.style.overflow = "visible";
      document.body.style.position = "initial";

      this.setState({ menuToggle: false, outsideMenuEvents: false });
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    // , height: window.innerHeight
  }

  render() {
    const { menuToggle, outsideMenuEvents } = this.state;
    const { children } = this.props;
    return (
      <ModalContextProvider>
        <StructuredDataMain />
        <GlobalStyle />
        <div ref={this.myRef}>
          <MenuButton menuToggle={menuToggle} onClick={this.handleMenuToggle} />
          <Menu menuToggle={menuToggle} closeonEsc={this.closeonEsc} />
        </div>
        <Topper menuToggle={menuToggle} />
        <Body outsideMenuEvents={outsideMenuEvents} menuToggle={menuToggle}>
          <Navigation />
          <Logo menuToggle={menuToggle} />
          <Container>
            {children}
            <Footer />
          </Container>
        </Body>
      </ModalContextProvider>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
