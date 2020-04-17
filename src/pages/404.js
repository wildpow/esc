import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Main, Img } from "../styles/panda404Styles";
import { H2 } from "../styles/styledComponents";
import image from "../images/ezgif.com-optimize.gif";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import { fadeIn, flexCol, themer } from "../styles/mainStyles";

const NotFoundPage = () => {
  let uri = [];
  if (typeof window !== "undefined") {
    uri = window.location.href.split("/");
  } else {
    uri = [""];
  }
  return (
    <Layout>
      <BreadWrapper>
        <BreadCrumbs here={uri[uri.length - 1]} />
      </BreadWrapper>
      <Main className={`${fadeIn} ${flexCol} ${themer}`}>
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
    </Layout>
  );
};

export default NotFoundPage;
