import React from "react";
// import ReviewContainer from "./ReviewContainer";
import Reviews from "./ReviewView";
import ReviewFetch from "./AboutReviewFetch";

const AboutReviewNew = () => {
  let content = null;
  let maxIndex = null;
  if (typeof window !== "undefined" && window) {
    content = JSON.parse(localStorage.getItem("content"));
    maxIndex = localStorage.getItem("maxIndex");
  }
  if (content === null || maxIndex === null) {
    return <ReviewFetch />;
  }
  return <Reviews maxIndex={Number(maxIndex)} content={content} />;
};

export default AboutReviewNew;
