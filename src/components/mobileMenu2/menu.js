import React from "react";
import styled from "styled-components";

const Container = styled.div`
  visibility: ${props => (props.menuToggle ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1565c0;
  opacity: 1;
  color: #fafafa;
  z-index: 20;
  padding-top: 3rem;
  width: 100%;
  transition: transform 0.4s ease;
  transform: ${props =>
    props.menuToggle ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
  @media (min-width: 1022px) {
    display: none;
  }
`;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: this.props.menuToggle ? this.props.menuToggle : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuToggle !== this.state.menuToggle) {
      this.setState({ menuToggle: nextProps.menuToggle });
    }
  }

  render() {
    return (
      <Container menuToggle={this.state.menuToggle}>
        {this.state.menuToggle ? this.props.children : null}
      </Container>
    );
  }
}

export default Menu;
