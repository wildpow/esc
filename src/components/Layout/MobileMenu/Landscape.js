import styled from "styled-components";
import { Link } from "gatsby";
import { colors, fonts } from "../../../utils/styles";

const StyledLink = styled(Link)`
  font-family: ${fonts.sans};
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: ${colors.gray["100"]};
  background-color: inital;
  transition: background-color 0.2s ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.4);
  /* border-radius: 4px; */
  margin: 6px;
  padding: 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 75, 95, 0.4);
  }
  &:active {
    background-color: rgba(235, 28, 26, 0.8);
  }
  @media (min-height: 200px) and (max-height: 280px) {
    padding: 10px;
    margin: 6px;
  }
  @media (min-width: 640px) and (min-height: 360px) {
    margin: 8px;
    padding: 17px;
  }
  @media (min-width: 640px) and (min-height: 375px) {
    margin: 8px;
    padding: 20px;
  }
  @media (min-width: 731px) and (min-height: 411px) {
    margin: 8px;
    padding: 20px;
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 736px) and (min-height: 414px) {
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 812px) and (min-height: 375px) {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;
    padding: 16px;
  }
`;

const Wrapper = styled.div`
  display: none;
  /* @media (min-height: 200px) and (max-height: 280px) {
    width: 98%;
    height: 100%;
  } */

  @media (orientation: landscape) and (max-height: 600px) {
    display: flex;
    flex-direction: row;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 1px;
    padding-top: 34px;
  }
  @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
    display: none;
  }
  @media (max-width: 400px) and (max-height: 400px) {
    display: none;
  }
`;
const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  padding: 0px;
  text-align: center;
  justify-content: space-evenly;
  @media (min-height: 200px) and (max-height: 280px) {
    margin-bottom: 20px;
  }
`;

// const Div = styled.div`
//   height: 140px;
//   position: relative;
//   @media (min-height: 200px) and (max-height: 280px) {
//     display: initial;
//     height: 1px;
//   }

//   @media (orientation: portrait) {
//     display: none;
//   }
//   @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
//     display: none;
//   }
//   @media (max-width: 400px) and (max-height: 400px) {
//     display: none;
//   }
//   @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
//     display: none;
//   }
//   @media (orientation: portrait) {
//     display: none;
//   }
//   @media (max-width: 400px) and (max-height: 450px) {
//     display: none;
//   }
//   @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
//     display: none;
//   }
// `;
// const Home = styled(StyledLink)`
//   position: absolute;
//   top: 53px;
//   left: 5px;
//   padding: 15px;
//   width: 30.5%;
//   text-align: center;
//   /* @media (min-height: 200px) and (max-height: 280px) and (min-width: 610px) {

//   } */
//   @media (min-height: 200px) and (max-height: 280px) {
//     top: 20px;
//     width: 31%;
//   }
//   @media (max-height: 315px) {
//     display: none;
//   }
//   @media (min-height: 200px) and (max-height: 280px) {
//     display: initial;
//     padding: 10px;
//   }
//   @media (orientation: portrait) {
//     display: none;
//   }
//   @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
//     display: none;
//   }
//   @media (max-width: 400px) and (max-height: 400px) {
//     display: none;
//   }
//   @media (min-width: 800px) and (min-height: 375px) {
//     width: 31%;
//   }
//   @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
//     display: none;
//   }
//   @media (orientation: portrait) {
//     display: none;
//   }
//   @media (max-width: 400px) and (max-height: 450px) {
//     display: none;
//   }
//   @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
//     display: none;
//   }
// `;
const Landscape = () => {
  return (
    <>
      {/* <Div>
        <Home
          onClick={() => {
            document.body.style.overflow = "visible";
            document.body.style.position = "initial";
          }}
          activeStyle={{
            backgroundColor: "rgba(235, 28, 26, 0.9)",
          }}
          to="/"
        >
          Home
        </Home>
      </Div> */}
      <Wrapper>
        <Holder>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/brands"
          >
            Mattresses
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/adjustable"
          >
            Ajustables
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/accessories"
          >
            Accessories
          </StyledLink>
        </Holder>
        <Holder>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/financing"
          >
            Financing
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/blog"
          >
            Our Blog
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/about"
          >
            About Us
          </StyledLink>
        </Holder>
        <Holder>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/warranty"
          >
            Warranty
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/policies"
          >
            Policies
          </StyledLink>
          <StyledLink
            onClick={() => {
              document.body.style.overflow = "visible";
              document.body.style.position = "initial";
            }}
            partiallyActive
            activeStyle={{
              backgroundColor: "rgba(235, 28, 26, 0.9)",
            }}
            to="/sitemap"
          >
            Site Map
          </StyledLink>
        </Holder>
      </Wrapper>
    </>
  );
};

export default Landscape;
