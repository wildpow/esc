import { Location } from "@reach/router";
import queryString from "query-string";
import getMattressTypes from "./mattressType.query";
import getMattressBrands from "./mattressBrand.query";

const comfortCheckBoxes = [
  {
    id: 0,
    displayName: "Extra Firm",
    firmness: 1,
    urlParam: "extrafirm",
    checked: false,
  },
  {
    id: 1,
    displayName: "Firm",
    firmness: 2,
    urlParam: "firm",
    checked: false,
  },
  {
    id: 2,
    displayName: "Medium",
    firmness: 3,
    urlParam: "medium",
    checked: false,
  },
  {
    id: 3,
    displayName: "Plush",
    firmness: 4,
    urlParam: "plush",
    checked: false,
  },
  {
    id: 4,
    displayName: "Ultra Plush",
    firmness: 5,
    urlParam: "ultraplush",
    checked: false,
  },
];

const queryKeys = ["brand", "type", "comfort"];
const withLocation = (ComponentToWrap) => (props) => {
  const mattressTypes = getMattressTypes();
  const mattressBrands = getMattressBrands();
  return (
    <Location>
      {({ location, navigate }) => {
        if (Object.keys(location.search).length !== 0) {
          let newQuery;
          const query = queryString.parse(location.search.toLocaleLowerCase(), {
            arrayFormat: "comma",
          });
        } else {
          console.log("efkkwfek;lwefk");
        }
        return (
          <ComponentToWrap
            {...props}
            location={location}
            navigate={navigate}
            typeState={mattressTypes}
            brandState={mattressBrands}
            comfortState={comfortCheckBoxes}
            search={location.search ? queryString.parse(location.search) : {}}
          />
        );
      }}
    </Location>
  );
};

export default withLocation;
