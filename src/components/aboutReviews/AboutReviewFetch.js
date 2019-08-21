import React, { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./ReviewView";
import Spinner from "./spinner";

const ReviewFetch = () => {
  const [data, setData] = useState({ data: [] });
  const [maxIndex, setMaxIndex] = useState({ maxIndex: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(process.env.GATSBY_REST);
        const filteredData = result.data.filter(val => val.comments !== null);
        const newMaxIndex = filteredData.length - 1;
        if (typeof window !== "undefined" && window) {
          localStorage.setItem("maxIndex", newMaxIndex);
          localStorage.setItem("content", JSON.stringify(filteredData));
        }
        setData(filteredData);
        setMaxIndex(Number(newMaxIndex));
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isError && null}
      {isLoading ? <Spinner /> : <Reviews maxIndex={maxIndex} content={data} />}
    </>
  );
};

export default ReviewFetch;
