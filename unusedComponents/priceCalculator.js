import React from "react";
import PropTypes from "prop-types";
import MakeOffer from "./makeOffer/makeOffer";
import {
  DropDown,
  PriceTitle,
  AddBoxTitle,
  Total,
  BeforeSalePrice,
  Wrapper,
  DropDownSize,
  DropDownWrapper,
} from "../styles/priceCalStyles";

class PriceCalculator extends React.PureComponent {
  static propTypes = {
    mattOnly: PropTypes.instanceOf(Array).isRequired,
    setPrice: PropTypes.instanceOf(Array).isRequired,
    mattOnlySale: PropTypes.instanceOf(Array).isRequired,
    freeBoxSpring: PropTypes.string.isRequired,
    mattress: PropTypes.string.isRequired,
    boxPrice: PropTypes.instanceOf(Array).isRequired,
    setPriceSale: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      sizeSector: "0",
      boxSector: "1",
      totalMattOnlyPrice: 0,
      totalSetPrice: 0,
      boxPrice: 0,
      name: "",
      BoxAdded: false,
      opacityAddBox: 0,
      opacityIsNaN: 0,
      opacityTotal: 0,
      notFoundOrAddText: true,
      isOnSale: false,
      boxDisabled: true,
      saleOpacity: 0,
      // mattOnlyPricessetPrices: null,
      isNaNBool: false,
    };
    this.mattSizeSector = this.mattSizeSector.bind(this);
    this.AddBoxPrice = this.AddBoxPrice.bind(this);
  }

  mattSizeSector(e) {
    this.setState(
      {
        sizeSector: e.target.value,
      },
      () => this.checkForSalePrice(),
    );
  }

  checkForSalePrice() {
    const { sizeSector } = this.state;
    const { mattOnlySale, mattOnly, setPrice, setPriceSale } = this.props;
    const SizeSector = Number(sizeSector);
    if (
      mattOnlySale === null ||
      mattOnlySale[SizeSector] === undefined ||
      mattOnlySale[SizeSector] === 0
    ) {
      this.setState(
        {
          isOnSale: false,
          mattOnlyPrices: mattOnly,
          setPrices: setPrice,
        },
        () => this.changePrice(),
      );
    } else {
      this.setState(
        {
          isOnSale: true,
          mattOnlyPrices: mattOnlySale,
          setPrices: setPriceSale,
        },
        () => this.changePrice(),
      );
    }
  }

  changePrice() {
    const { sizeSector, mattOnlyPrices, setPrices } = this.state;
    const { boxPrice } = this.props;
    switch (sizeSector) {
      case "0":
        this.setState(
          {
            name: "Twin",
            totalMattOnlyPrice: mattOnlyPrices[0],
            totalSetPrice: setPrices[0],
            boxPrice: boxPrice[0],
            BoxAdded: false,
            boxSector: "1",
          },
          () => this.PriceCheck(),
        );
        break;
      case "1":
        this.setState(
          {
            name: "TwinXL",
            totalMattOnlyPrice: mattOnlyPrices[1],
            totalSetPrice: setPrices[1],
            boxPrice: boxPrice[1],
            BoxAdded: false,
            boxSector: "1",
          },
          () => this.PriceCheck(),
        );
        break;
      case "2":
        this.setState(
          {
            name: "Full",
            totalMattOnlyPrice: mattOnlyPrices[2],
            totalSetPrice: setPrices[2],
            boxPrice: boxPrice[2],
            BoxAdded: false,
            boxSector: "1",
          },
          () => this.PriceCheck(),
        );
        break;
      case "3":
        this.setState(
          {
            name: "Queen",
            totalMattOnlyPrice: mattOnlyPrices[3],
            totalSetPrice: setPrices[3],
            boxPrice: boxPrice[3],
            BoxAdded: false,
            boxSector: "1",
          },
          () => this.PriceCheck(),
        );
        break;
      case "4":
        this.setState(
          {
            name: "King/Cal. King",
            totalMattOnlyPrice: mattOnlyPrices[4],
            totalSetPrice: setPrices[4],
            boxPrice: boxPrice[4],
            BoxAdded: false,
            boxSector: "1",
          },
          () => this.PriceCheck(),
        );
        break;
      default:
        this.setState({
          opacityAddBox: 0,
          opacityTotal: 0,
          BoxAdded: false,
          opacityIsNaN: 0,
          boxSector: "1",
          name: "",
          boxDisabled: true,
          saleOpacity: 0,
        });
    }
  }

  PriceCheck() {
    const { totalMattOnlyPrice } = this.state;
    if (totalMattOnlyPrice === "-n/a-" || totalMattOnlyPrice === -1) {
      this.setState(
        {
          opacityIsNaN: 1,
          isNaNBool: true,
          opacityAddBox: 0,
          opacityTotal: 0,
          notFoundOrAddText: false,
        },
        () => this.showSale(),
      );
    } else {
      this.setState(
        {
          opacityIsNaN: 0,
          isNaNBool: false,
          opacityAddBox: 1,
          opacityTotal: 1,
          notFoundOrAddText: true,
          boxDisabled: false,
        },
        () => this.showSale(),
      );
    }
  }

  showSale() {
    const { isOnSale, isNaNBool } = this.state;
    if (isOnSale && !isNaNBool) {
      this.setState({
        saleOpacity: 1,
      });
    } else {
      this.setState({
        saleOpacity: 0,
      });
    }
  }

  AddBoxPrice(e) {
    const { BoxAdded } = this.state;
    if (BoxAdded) {
      this.setState({
        boxSector: e.target.value,
        // total: mattOnlyPrices[sizeSector],
        BoxAdded: false,
      });
    } else {
      this.setState({
        boxSector: e.target.value,
        // total: setPrices[sizeSector],
        BoxAdded: true,
      });
    }
  }

  boxdropdown() {
    const { opacityAddBox, boxSector, boxDisabled, boxPrice } = this.state;
    const { freeBoxSpring } = this.props;
    return (
      <div
        style={{
          opacity: opacityAddBox,
          transition: "opacity 350ms ease-in-out",
        }}
      >
        <DropDown
          onChange={this.AddBoxPrice}
          value={boxSector}
          disabled={boxDisabled}
        >
          <option value="1">[$0.00] No Box Spring</option>
          <option value="2">
            {freeBoxSpring === "False"
              ? `[$${boxPrice}.00] Standard Foundation`
              : "[ FREE ] Standard Foundation"}
          </option>
        </DropDown>
      </div>
    );
  }

  render() {
    const {
      name,
      opacityAddBox,
      notFoundOrAddText,
      opacityIsNaN,
      saleOpacity,
      isOnSale,
      BoxAdded,
      sizeSector,
      opacityTotal,
      boxDisabled,
      totalSetPrice,
      totalMattOnlyPrice,
    } = this.state;
    const { setPrice, mattOnly, mattress } = this.props;
    return (
      <Wrapper>
        <DropDownWrapper>
          <PriceTitle>{`PRICE: ${name}`}</PriceTitle>
          <div>
            <DropDownSize onChange={this.mattSizeSector}>
              <option value="10">Select Size</option>
              <option value="0">Twin</option>
              <option value="1">Twin Extra Long</option>
              <option value="2">Full</option>
              <option value="3">Queen</option>
              <option value="4">King/Cal. King</option>
            </DropDownSize>
          </div>
        </DropDownWrapper>
        <DropDownWrapper>
          {notFoundOrAddText ? (
            <AddBoxTitle
              style={{
                opacity: opacityAddBox,
                transition: "opacity 250ms ease-in-out",
              }}
            >
              Add a Box Spring
            </AddBoxTitle>
          ) : (
            <AddBoxTitle
              style={{
                opacity: opacityIsNaN,
                transition: "opacity 250ms ease-in-out",
              }}
            >
              Size is Unavailable
            </AddBoxTitle>
          )}
          {this.boxdropdown()}
        </DropDownWrapper>
        {isOnSale ? (
          <BeforeSalePrice
            style={{
              opacity: saleOpacity,
              transition: "opacity 250ms ease-in-out",
            }}
          >
            $
            {BoxAdded
              ? setPrice[sizeSector] === -1 || mattOnly[sizeSector] === "-n/a-"
                ? " "
                : setPrice[sizeSector]
              : mattOnly[sizeSector] === -1 || mattOnly[sizeSector] === "-n/a-"
              ? " "
              : mattOnly[sizeSector]}
          </BeforeSalePrice>
        ) : (
          <BeforeSalePrice
            style={{
              opacity: saleOpacity,
              transition: "opacity 250ms ease-in-out",
            }}
          >
            $
            {BoxAdded
              ? setPrice[0] === -1 || setPrice[0] === "-n/a-"
                ? " "
                : setPrice[0]
              : mattOnly[0] === -1 || mattOnly[0] === "-n/a-"
              ? " "
              : mattOnly[0]}
          </BeforeSalePrice>
        )}
        <Total
          style={{
            opacity: opacityTotal,
            transition: "opacity 250ms ease-in-out",
          }}
        >
          TOTAL: $
          {BoxAdded
            ? totalSetPrice === -1 || totalSetPrice === "-n/a-"
              ? " "
              : totalSetPrice
            : totalMattOnlyPrice === -1 || totalMattOnlyPrice === "-n/a-"
            ? " "
            : totalMattOnlyPrice}
        </Total>
        <MakeOffer
          disabled={boxDisabled}
          opacity={opacityTotal} // MakeOffer only shows when total is visiable
          mattress={mattress} // from SingleMattres -> priceCalculator ->
          size={name}
        />
      </Wrapper>
    );
  }
}

// sizeSector: '0',
// boxSector: '1',
// totalMattOnlyPrice: 0,
// totalSetPrice: 0,
// boxPrice: 0,
// name: '',
// BoxAdded: false,
// opacityAddBox: 0,
// opacityIsNaN: 0,
// opacityTotal: 0,
// notFoundOrAddText: true,
// isOnSale: false,
// boxDisabled: true,
// saleOpacity: 0,
// mattOnlyPrices: null,
// setPrices: null,
// isNaNBool: false

export default PriceCalculator;
