import { Link } from "gatsby";
import { styled } from "goober";
import Layout from "../components/Layout";
import OldH2 from "../old/oldHeading.styled";
import image from "../images/ezgif.com-optimize.gif";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import { boxShadow, fonts, FadeInAnimation } from "../styles/theme.styled";

const Main = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.sans};
  border: 1px solid #eee;
  box-shadow: ${boxShadow.md};
  ${FadeInAnimation}
  border-radius: .11rem;
  text-align: center;
  justify-content: center;
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
      <BreadWrapper>
        <BreadCrumbs here={uri[uri.length - 1]} />
      </BreadWrapper>
      <Main>
        <header>
          <OldH2>
            Our panda couldn&apos;t find the product you&apos;re looking for...
          </OldH2>
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
