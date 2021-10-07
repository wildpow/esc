import { useEffect, useState } from "react";
import queryString from "query-string";

const QueryStringChecker = ({ location, render, data }) => {
  const [updatedQS, setUpdatedQS] = useState(null);
  console.log(data, "wefwefewf");
  // if (Object.keys(location.search).length !== 0) return render(updatedQS);
  // useEffect(()=> {

  // },[])
  return render(updatedQS);
};

export default QueryStringChecker;
