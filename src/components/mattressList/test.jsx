import React from "react";
import MattressThumb from "./mattThumbNail";

const Tester = ({ matt }) => {
  return (
    <>
      {matt.map(matter => console.log("test", matter.priceLow))}
      {matt.map(mattress => (
        <MattressThumb
          key={mattress.id}
          mattress={mattress}
          url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
        />
      ))}
    </>
  );
};

export default Tester;
