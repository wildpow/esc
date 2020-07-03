import React from "react";
import AccessoryList from "../../components/Accessories/AccessoryList";

const AccessoryListingPage = ({ location }) => {
  return (
    <>
      {console.log(typeof loaction)}
      <AccessoryList location={location} />
    </>
  );
};
export default AccessoryListingPage;
