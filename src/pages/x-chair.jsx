import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import {
  boxShadow,
  colors,
  fonts,
  fontSize,
  spacing,
  boxShadowHover,
  FadeInAnimation,
  breakpoints,
} from "../styles/theme.styled";

const XchairRoot = styled.section`
  background-color: white;
  font-family: ${fonts.sans};
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .xChairCard {
    background-color: ${colors.gray[100]};
    border: 1px solid ${colors.gray[200]};
    /* justify-content: space-between;
    align-content: space-between; */
    display: flex;
    flex-direction: column;
    ${boxShadowHover}
    ${FadeInAnimation}
    /* box-shadow: ${boxShadow.lg}; */
    text-decoration: none;
    color: ${colors.gray[800]};
    font-family: ${fonts.sans};
    padding: ${spacing[8]} ${spacing[4]};
    gap: 25px;
    h3 {
      width: 100px;
      text-align: center;
      margin: 0 auto;
    }
    p {
      font-size: ${fontSize.xl};
      margin: 0;
      max-height: 260px;
      flex: 1;
    }
    button {
      padding: 10px 0;
      background-color: #ec1221;
      color: white;
      font-weight: 700;
      font-size: ${fontSize.xl};
      border-radius: 5px;
    }
  }
  .xChairCardWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .mainChairHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: ${fontSize.xl};
      line-height: ${spacing[6]};
      max-width: 850px;
      text-align: center;
      margin: 0;
    }
  }
  @media (min-width: ${breakpoints.phablet}) {
    .xChairCard {
      padding: ${spacing[8]};

      max-width: 339px;
      button {
        font-size: ${fontSize["2xl"]};
      }
    }
    .mainChairHeader {
      p {
        font-size: ${fontSize["2xl"]};
        line-height: ${spacing[8]};
      }
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .xChairCard {
      max-width: 350px;
    }
  }
`;
export default function Xchair() {
  return (
    <Layout bgWhite>
      <XchairRoot>
        <div className="mainChairHeader">
          <h2 style={{ textAlign: "center" }}>
            <StaticImage
              src="../images/xChair/logo.png"
              alt="X-Chair Logo"
              width={500}
              layout="constrained"
            />
          </h2>
          <p>
            Finally! An office chair with 21st century technology and design.
            There is no need to compromise, X-Chair enables users to both look
            good and be more productive. The all-new X-Chair advances the
            function of office seating. It is distinctly stylish, budget
            friendly, and made with proprietary ergonomic comfort technology
            that has never before been applied to office seating.
          </p>
        </div>
        <div className="xChairCardWrapper">
          <Link to="/x-chair/x-1" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/landingIcons/x_1.png"
                alt="X-Chair X-4 logo"
                layout="constrained"
                width={150}
              />
            </h3>
            <p>
              X1’s classic black base pairs with the black and gray mesh color
              options to create an aesthetic that works in any office
              environment. The bold curves of the X-Chair deliver modern
              technology and comfort that can’t be found in any other office
              chair.
            </p>
            <button type="button">Build X-1</button>
          </Link>
          <Link to="/x-chair/x-2" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/landingIcons/x_2.png"
                alt="X-Chair X-4 logo"
                layout="constrained"
                width={150}
              />
            </h3>
            <p>
              A striking polished aluminum base and four K-Sport
              soft-to-the-touch material color options, from vibrant red to
              classic black, let you individualize your X2 like never before.
              The X2’s bold curves, advanced technology, and unprecedented
              comfort transform any workspace into an oasis.
            </p>
            <button type="button">Build X-2</button>
          </Link>
          <Link to="/x-chair/x-3" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/landingIcons/xchair_type3_icon.png"
                alt="X-Chair X-4 logo"
                layout="constrained"
                width={150}
              />
            </h3>
            <p>
              Introducing X3, the most innovative X-Chair yet.X3 incorporates
              all of the same design and ergonomics as the X2. However, we are
              excited to introduce Advanced Tensile Recovery fabric (ATR)
              throughout the chair to provide enhanced support and comfort.
            </p>
            <button type="button">Build X-3</button>
          </Link>
          <Link to="/x-chair/x-4" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/landingIcons/x_4.png"
                alt="X-Chair X-4 logo"
                layout="constrained"
                width={150}
              />
            </h3>
            <p>
              X4 is draped in supple, premium leather. The seat, back, and
              optional headrest deliver comfort from the moment you touch. X4
              features an innovative and attractive layer of mesh behind the
              leather to deliver the support you need with the comfort and style
              you deserve.
            </p>
            <button type="button">Build X-4</button>
          </Link>
        </div>
      </XchairRoot>
    </Layout>
  );
}
