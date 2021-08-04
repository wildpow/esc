import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { boxShadow, colors, fonts, spacing } from "../styles/theme.styled";

const XchairRoot = styled.section`
  background-color: white;
  .xChairCard {
    box-shadow: ${boxShadow.lg};
    max-width: 350px;
    text-decoration: none;
    color: ${colors.gray[800]};
    font-family: ${fonts.sans};
    padding: ${spacing[8]};
  }
  .xChairCardWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
export default function Xchair() {
  return (
    <Layout bgWhite>
      <XchairRoot>
        <h2 style={{ textAlign: "center" }}>
          <StaticImage src="../images/xChair/logo.png" alt="X-Chair Logo" />
        </h2>
        <div className="xChairCardWrapper">
          <Link to="/x-chair/x-1" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/icons/x_1.png"
                alt="X-Chair X-1 logo"
              />
            </h3>
            <p>
              X1’s classic black base pairs with the black and gray mesh color
              options to create an aesthetic that works in any office
              environment. The bold curves of the X-Chair deliver modern
              technology and comfort that can’t be found in any other office
              chair.
            </p>
          </Link>
          <Link to="/x-chair/x-2" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/icons/x_2.png"
                alt="X-Chair X-2 logo"
              />
            </h3>
            <p>
              A striking polished aluminum base and four K-Sport
              soft-to-the-touch material color options, from vibrant red to
              classic black, let you individualize your X2 like never before.
              The X2’s bold curves, advanced technology, and unprecedented
              comfort transform any workspace into an oasis.
            </p>
          </Link>
          <Link to="/x-chair/x-3" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/icons/x_3.png"
                alt="X-Chair X-3 logo"
              />
            </h3>
            <p>
              Introducing X3, the most innovative X-Chair yet.X3 incorporates
              all of the same design and ergonomics as the X2. However, we are
              excited to introduce Advanced Tensile Recovery fabric (ATR)
              throughout the chair to provide enhanced support and comfort.
            </p>
          </Link>
          <Link to="/x-chair/x-4" className="xChairCard">
            <h3>
              <StaticImage
                src="../images/xChair/icons/x_4.png"
                alt="X-Chair X-4 logo"
              />
            </h3>
            <p>
              X4 is draped in supple, premium leather. The seat, back, and
              optional headrest deliver comfort from the moment you touch. X4
              features an innovative and attractive layer of mesh behind the
              leather to deliver the support you need with the comfort and style
              you deserve.
            </p>
          </Link>
        </div>
      </XchairRoot>
    </Layout>
  );
}
