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
.carousel.carousel-slider .control-arrow,.carousel .control-arrow{-webkit-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:""}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;box-sizing:border-box}.carousel button{outline:0;border:0;background:0 0}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333;padding:2px}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-ms-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.9);box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}.slide{margin-bottom:0!important;margin-top:0!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.carousel .slide{background:#fff;margin:auto}.control-prev{width:50px!important;font-size:2rem}.control-next{width:50px}@media(min-width:1100px){.control-next{width:70px}.control-prev{width:70px!important;font-size:2rem}}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{border-top:20px solid transparent;border-bottom:20px solid transparent}.carousel .control-next.control-arrow:before{border-left:20px solid #fff}.carousel .control-prev.control-arrow:before{border-right:20px solid #fff}
`;
// @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700,700i&display=swap');

// @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:300,400,500,700');

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
  /* padding-left: 5px;
  padding-right: 5px; */
  @media (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    width: 800px;
  }
  @media (min-width: 860px) {
    width: 850px;
  }
  @media (min-width: 900px) {
    width: 850px;
  }
  @media (min-width: 992px) {
    width: 970px;
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
  }
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
