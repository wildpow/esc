import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* width: ${props => (props.open ? "300px" : 0)}; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1565c0;
  opacity: 1;
  color: #fafafa;
  /* transition: width 0.3s ease; */
  z-index: 20;
  padding-top: 3rem;
  /* new */
  width: 300px;
  transition: transform 0.4s ease;
   transform: ${props =>
     props.open ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
`;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    return (
      <Container open={this.state.open}>
        {this.state.open ? this.props.children : null}
      </Container>
    );
  }
}

export default Menu;
