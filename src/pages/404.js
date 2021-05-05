import * as React from "react";
import { Link } from "gatsby";
import { styled, theme } from "twin.macro";
import Layout from "../components/Layout";
import H2 from "../components/Old/H2.styled";
import image from "../images/ezgif.com-optimize.gif";
import BreadCrumbs from "../components/BreadCrumbs";
import FadeIn from "../components/Old/fadeIn.styled";

const Main = styled("section")`
  box-shadow: ${theme`boxShadow.md`};
  animation: ${FadeIn} 0.35s linear normal;
  display: flex;
  flex-direction: column;
  font-family: ${theme`fontFamily.sans`};
  border-radius: 0.11rem;
  text-align: center;
  justify-content: center;
  border: 1px solid #eee;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

const Img = styled("img")`
  color: white;
  margin: auto;
  max-width: 20rem;
  @media (min-width: 800px) {
    max-width: 40rem;
  }
`;

const NotFoundPage = () => {
  let uri = [];
  if (typeof window !== "undefined") {
    uri = window.location.href.split("/");
  } else {
    uri = [""];
  }
  return (
    <Layout>
      <BreadCrumbs here={uri[uri.length - 1]} />
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
      <BreadCrumbs here={uri[uri.length - 1]} />
    </Layout>
  );
};

export default NotFoundPage;
