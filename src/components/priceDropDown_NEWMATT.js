import React from "react";
import styled from "styled-components";
import { FlexCol } from "../styles/mainStyles";
import MakeOffer from "./makeOffer/makeOffer_NEW";

const Wrapper = styled(FlexCol)`
  margin-left: 5px;
  justify-content: center;
  @media (min-width: 1024px) {
    margin-left: 25px;
    margin-top: 10px;
    border-left: ${props => props.theme.Border};
  }
  @media (min-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (min-width: 1300px) {
    margin-top: 0px;
  }
`;
// Exact duplicate
const DropDownWrapper = styled.div`
  align-self: flex-end;
  @media print {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h4 {
    margin-bottom: 2px;
    margin-top: 0px;
    font-family: ${props => props.theme.MainFont2};
    font-size: 0.9rem;
    @media (min-width: 567px) {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1300px) {
      margin-top: 2px;
    }
    @media print {
      font-size: 1.2rem;
    }
  }
`;

// Exact duplicate
const BeforeSalePrice = styled.h6`
  opacity: ${props =>
    props.discount > 1 && props.price !== 0 && props.price !== undefined
      ? 1
      : 0};
  font-family: ${props => props.theme.MainFont2};
  margin-top: 2px;
  margin-bottom: 0px;
  text-decoration: line-through;
  text-decoration-color: ${props => props.theme.mainColor2};
  -webkit-text-decoration-color: ${props => props.theme.mainColor2};
  -moz-text-decoration-color: ${props => props.theme.mainColor2};
  text-align: right;
  @media (min-width: 360px) {
    margin-top: 4px;
  }
  @media (min-width: 567px) {
    margin-top: 8px;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  @media print {
    font-size: 1.3rem;

    margin-top: 20px;
  }
`;

const Select = styled.select`
  color: white;
  cursor: pointer;
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont2};

  width: 150px;
  @media (min-width: 360px) {
    width: 160px;
  }
  @media (min-width: 411px) {
    width: 180px;
  }
  @media (min-width: 567px) {
    /* width: auto; */
    -moz-appearance: none;
    -webkit-appearance: none;
    /* outline: none; */
    padding: 8px;
    border-radius: 0.18rem;
    line-height: 20px;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 20px;
    line-height: 25px;
    /* width: 100%; */
  }
  @media (min-width: 1024px) {
    margin-bottom: 30px;
    padding: 15px;
    font-size: 1.3rem;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  @media (min-width: 1200px) {
    padding: 20px 20px 20px 20px;
  }
  @media (min-width: 1300px) {
    margin-bottom: 10px;
  }
  @media print {
    border-color: black;
    color: black;
    font-size: 1.2rem;
    width: 220px;
  }
`;
const BoxSelect = styled(Select)`
  opacity: ${props => (props.index !== "" && props.price !== 0 ? 1 : 0)};
  transition: opacity 250ms ease-in;
  cursor: ${props =>
    props.index !== "" && props.price !== 0 ? "pointer" : "auto"};
`;

const H4 = styled.h4`
  opacity: ${props => (props.index !== "" ? 1 : 0)};
  transition: opacity 250ms ease-in;
`;

// Exact duplicate
export const Total = styled.h4`
  transition: ${props =>
    props.price === 0 || Number.isNaN(props.price) === true
      ? `opacity 0ms ease-in-out`
      : `opacity 250ms ease-in-out`};
  opacity: ${props =>
    props.price === 0 || Number.isNaN(props.price) === true ? 0 : 1};
  margin-top: 0px;
  font-family: ${props => props.theme.MainFont2};
  margin-bottom: 2px;
  font-size: 1rem;
  text-align: right;
  @media (min-width: 567px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
  @media print {
    font-size: 1.7rem;
  }
`;
class DropDown extends React.Component {
  static defaultProps = {
    discount: 0,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      selectedIndex: "",
      selectedName: "",
      boxDropDisabled: true,
      boxPrice: 0,
      makeOfferOpacity: 0,
    };
    this.sizeSelect = this.sizeSelect.bind(this);
  }

  sizeSelect = e => {
    switch (e.target.value) {
      case "twin":
        this.setState({
          selectedName: "Twin",
          selectedIndex: e.target.value,
          boxDropDisabled: false,
          makeOfferOpacity: 1,
        });
        break;
      case "twinxl":
        this.setState({
          selectedName: "TwinXL",
          selectedIndex: e.target.value,
          boxDropDisabled: false,
          makeOfferOpacity: 1,
        });
        break;
      case "full":
        this.setState({
          selectedName: "Full",
          selectedIndex: e.target.value,
          boxDropDisabled: false,
          makeOfferOpacity: 1,
        });
        break;
      case "queen":
        this.setState({
          selectedName: "Queen",
          selectedIndex: e.target.value,
          boxDropDisabled: false,
          makeOfferOpacity: 1,
        });
        break;
      case "king":
        this.setState({
          selectedName: "King/Cal. King",
          selectedIndex: e.target.value,
          boxDropDisabled: false,
          makeOfferOpacity: 1,
        });
        break;
      case "noBox":
        this.setState({
          boxPrice: 0,
        });
        break;
      case "addBox":
        this.setState({
          boxPrice: this.props.boxPrices[this.state.selectedIndex],
        });
        break;
      default:
        this.setState({
          selectedName: "",
          selectedIndex: "",
          boxDropDisabled: true,
          boxPrice: 0,
          makeOfferOpacity: 0,
        });
    }
  };

  render() {
    const { discount, prices, freeBoxSpring, boxPrices, mattress } = this.props;
    const {
      selectedName,
      selectedIndex,
      boxDropDisabled,
      boxPrice,
      makeOfferOpacity,
    } = this.state;
    return (
      <Wrapper>
        <DropDownWrapper>
          <h4>{`PRICE: ${selectedName}`}</h4>
          <Select onChange={e => this.sizeSelect(e)}>
            <option value="none">Select Size</option>
            <option value="twin">Twin</option>
            <option value="twinxl">Twin Extra Long</option>
            <option value="full">Full</option>
            <option value="queen">Queen</option>
            <option value="king">King/Cal. King</option>
          </Select>

          <H4 index={selectedIndex}>
            {prices[selectedIndex] !== 0
              ? "Add a Box Spring"
              : "Size is Unavailable"}
          </H4>
          <BoxSelect
            index={selectedIndex}
            price={prices[selectedIndex]}
            disabled={boxDropDisabled}
            onChange={e => this.sizeSelect(e)}
          >
            <option value="noBox">[$0.00] No Box Spring</option>
            <option value="addBox">
              {freeBoxSpring === false
                ? `[$${boxPrices[selectedIndex]}.00] Standard Foundation`
                : "[ FREE ] Standard Foundation"}
            </option>
          </BoxSelect>
        </DropDownWrapper>
        <BeforeSalePrice discount={discount} price={prices[selectedIndex]}>
          {discount > 1 && prices[selectedIndex] !== 0
            ? `$${prices[selectedIndex] + boxPrice}`
            : `Same`}
        </BeforeSalePrice>
        <Total price={Number(prices[selectedIndex])}>
          {discount > 1
            ? `TOTAL: $${
                freeBoxSpring
                  ? prices[selectedIndex] - discount
                  : prices[selectedIndex] - discount + boxPrice
              }`
            : `TOTAL: $${
                freeBoxSpring
                  ? prices[selectedIndex]
                  : prices[selectedIndex] + boxPrice
              }`}
        </Total>
        {prices[selectedIndex] !== 0 ? (
          <MakeOffer
            disabled={boxDropDisabled}
            opacity={makeOfferOpacity} // MakeOffer only shows when total is visiable
            mattress={mattress} // from SingleMattres -> priceCalculator ->
            // size={name}
          />
        ) : (
          <MakeOffer
            disabled
            opacity={0} // MakeOffer only shows when total is visiable
            mattress={mattress} // from SingleMattres -> priceCalculator ->
            // size={name}
          />
        )}
      </Wrapper>
    );
  }
}

export default DropDown;
