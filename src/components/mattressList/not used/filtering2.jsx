import React, { useState } from "react";
import MattressThumb from "./mattThumbNail";

const Filtering = ({ mattresses }) => {
  const [matts, setMatts] = useState(mattresses);
  return (
    <div>
      {/* <select name="poop" id="">
        <option value="">PRICE (LOW-HIGH)</option>
        <option value="">PRICE (HIGH-LOW)</option>
        <option value="">NAME (A-Z)</option>
        <option value="">NAME (Z-A)</option>
        <option value="">DEFAULT</option>
      </select> */}
      <button
        type="button"
        onClick={() =>
          setMatts([...matts].sort((a, b) => a.priceLow - b.priceLow))
        }
      >
        low-high
      </button>
      <button
        type="button"
        onClick={() =>
          setMatts([...matts].sort((a, b) => b.priceLow - a.priceLow))
        }
      >
        high-low
      </button>
      {matts.map(mattress => (
        <MattressThumb
          key={mattress.id}
          mattress={mattress}
          url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
        />
      ))}
    </div>
  );
};

export default Filtering;
