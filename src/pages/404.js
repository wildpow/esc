import React from "react";
import { Link } from "gatsby";
import { Main, Img } from "../styles/panda404Styles";
import { H2 } from "../styles/mainStyles";
import image from "../images/ezgif.com-optimize.gif";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";

const NotFoundPage = () => {
  let uri = [];
  if (typeof window !== "undefined") {
    uri = window.location.href.split("/");
  } else {
    uri = [""];
  }
  return (
    <>
      <BreadWrapper>
        <BreadCrumbs here={uri[uri.length - 1]} />
      </BreadWrapper>
      <Main>
        <header>
          <H2>
            Our panda couldn&apos;t find the product you&apos;re looking for...
          </H2>
        </header>

        <Link to="/">
          <Img src={image} alt="E S C Mattress Center Sleeping Panda " />
        </Link>
      </Main>
      <BreadWrapper>
        <BreadCrumbs here={uri[uri.length - 1]} />
      </BreadWrapper>
    </>
  );
};

export default NotFoundPage;
