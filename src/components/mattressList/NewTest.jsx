import React from "react";
import MattressThumb from "./mattThumbNail";

class NewTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.mattresses };
    this.lowHigh = this.lowHigh.bind(this);
    this.highLow = this.highLow.bind(this);
  }

  lowHigh() {
    let data = this.state.data.sort((a, b) => a.priceLow - b.priceLow);
    this.setState({ data });
  }

  highLow() {
    let data = this.state.data.sort((a, b) => b.priceLow - a.priceLow);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.lowHigh()}>
          low-high
        </button>
        <button type="button" onClick={() => this.highLow()}>
          high-low
        </button>
        {this.state.data.map(d => console.log(d.priceLow))}
        {this.state.data.map(mattress => {
          return (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          );
        })}
      </div>
    );
  }
}

export default NewTest;
