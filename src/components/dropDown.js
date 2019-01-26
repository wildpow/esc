import React from "react";
import {
  Wrapper,
  WholeThing,
  ButtonWrapper,
  Button,
  DropDownWrapper,
  Price,
  TopButton,
  Row,
  Sale,
  RegularPrice,
} from "../styles/dropDownStyles";

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonContent: "Select Size",
      open: false,
      selected: 0,
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.drop = this.drop.bind(this);
    this.selector = this.selector.bind(this);
  }

  buttonName = num => {
    switch (num) {
      case "1":
        return "Twin";
      case "2":
        return "TwinXL";
      case "3":
        return "Full";
      case "4":
        return "Queen";
      case "5":
        return "King/Cal. King";

      default:
        return null;
    }
  };

  handleDropdown() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  drop(e) {
    const buttonTitle = this.buttonName(e.currentTarget.dataset.id);
    this.setState({
      selected: e.currentTarget.dataset.id,
      buttonContent: buttonTitle,
    });
    this.buttonName();
    this.handleDropdown();
  }

  selector() {
    const { selected } = this.state;
    const { data, data2 } = this.props;
    switch (selected) {
      case "1":
        if (data2 === null || data2[0] === undefined || data2[0] === 0) {
          return `$${data[0]}`;
        }
        return (
          <Row>
            <Sale>{`$${data[0]}`}</Sale>
            <RegularPrice>{`$${data2[0]}`}</RegularPrice>
          </Row>
        );

      case "2":
        if (data2 === null || data2[1] === undefined || data2[1] === 0) {
          return `$${data[1]}`;
        }
        return (
          <Row>
            <Sale>{`$${data[1]}`}</Sale>
            <RegularPrice>{`$${data2[1]}`}</RegularPrice>
          </Row>
        );

      case "3":
        if (data2 === null || data2[2] === undefined || data2[2] === 0) {
          return `$${data[2]}`;
        }
        return (
          <Row>
            <Sale>{`$${data[2]}`}</Sale>
            <RegularPrice>{`$${data2[2]}`}</RegularPrice>
          </Row>
        );

      case "4":
        if (data2 === null || data2[3] === undefined || data2[3] === 0) {
          return `$${data[3]}`;
        }
        return (
          <Row>
            <Sale>{`$${data[3]}`}</Sale>
            <RegularPrice>{`$${data2[3]}`}</RegularPrice>
          </Row>
        );

      case "5":
        if (data2 === null || data2[4] === undefined || data2[4] === 0) {
          return `$${data[4]}`;
        }
        return (
          <Row>
            <Sale>{`$${data[4]}`}</Sale>
            <RegularPrice>{`$${data2[4]}`}</RegularPrice>
          </Row>
        );
      default:
        return null;
    }
  }

  render() {
    const { buttonContent, open } = this.state;
    return (
      <Wrapper>
        <WholeThing>
          <ButtonWrapper>
            <TopButton onClick={this.handleDropdown}>
              {buttonContent}
              &nbsp;&nbsp;&nbsp;
              {open ? "\u25B2" : "\u25BC"}
            </TopButton>
          </ButtonWrapper>
          {open && (
            <DropDownWrapper onMouseLeave={this.handleDropdown}>
              <Button
                type="button"
                role="button"
                onClick={this.drop}
                data-id="1"
              >
                Twin
              </Button>
              <Button
                type="button"
                role="button"
                onClick={this.drop}
                data-id="2"
              >
                TwinXL
              </Button>
              <Button
                type="button"
                role="button"
                onClick={this.drop}
                data-id="3"
              >
                Full
              </Button>
              <Button
                type="button"
                role="button"
                onClick={this.drop}
                data-id="4"
              >
                Queen
              </Button>
              <Button
                type="button"
                role="button"
                onClick={this.drop}
                data-id="5"
              >
                King/Cal. King
              </Button>
            </DropDownWrapper>
          )}
        </WholeThing>
        <Price>{this.selector()}</Price>
      </Wrapper>
    );
  }
}

export default DropDown;
