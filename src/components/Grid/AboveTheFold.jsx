import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { boxShadowHover, colors, fonts } from "../../styles/theme.styled";

const HeroRoot = styled.section`
  grid-column: 1/13;
  grid-row: 1/1;
  max-height: 800px;
  height: 100%;
  flex: 1;
  display: flex;
  ${boxShadowHover}
`;
const ShopLinksRoot = styled.section`
  grid-column: 1/13;
  grid-row: 2/3;
  grid-auto-rows: minmax(60px, auto);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
  display: grid;
  .shop__item {
    ${boxShadowHover}
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    display: grid;
    text-decoration: none;
  }
  .shop__text {
    padding: 15px 0;
    grid-column: 1/3;
    grid-row: 2/3;
    z-index: 10;
    text-align: center;
    background-color: rgba(155, 44, 44, 0.6);
    color: ${colors.gray[100]};
    font-family: ${fonts.sans};
    p {
      margin: 0;
      font-weight: 700;
    }
  }
  .shop__img {
    grid-column: 1/4;
    grid-row: 1/3;
    display: flex;
    max-height: 200px;
  }
  .--matt {
    grid-column: 1/13;
    grid-row: 1/2;
  }
  .--adj {
    grid-column: 1/13;
    grid-row: 2/3;
  }
  .--acc {
    grid-column: 1/13;
    grid-row: 3/4;
  }
  .--chair {
    grid-column: 1/13;
    grid-row: 4/5;
  }
  @media (min-width: 650px) {
    .shop__img {
      max-height: 250px;
    }

    .--matt {
      grid-column: 1/7;
      grid-row: 1/2;
    }
    .--adj {
      grid-column: 7/13;
      grid-row: 1/2;
    }
    .--acc {
      grid-column: 1/7;
      grid-row: 2/3;
    }
    .--chair {
      grid-column: 7/13;
      grid-row: 2/3;
    }
  }
  @media (min-width: 1250px) {
    .shop__img {
      display: initial;
      max-height: initial;
    }
    .--matt {
      grid-column: 1/4;
      grid-row: 1/2;
    }
    .--adj {
      grid-column: 4/7;
      grid-row: 1/2;
    }
    .--acc {
      grid-column: 7/10;
      grid-row: 1/2;
    }
    .--chair {
      grid-column: 10/13;
      grid-row: 1/2;
    }
  }
`;
export default function AboveTheFold() {
  return (
    <>
      <HeroRoot>
        <StaticImage
          src="../../images/homePage/hEROwITHtEXT.jpeg"
          width={1536}
          height={1236}
          layout="constrained"
          alt="test"
        />
      </HeroRoot>
      <ShopLinksRoot>
        <Link className="shop__item --matt" to="/brands/list">
          <div className="shop__img">
            <StaticImage
              src="../../images/homePage/Mattress630x420.jpeg"
              width={630}
              height={420}
              layout="constrained"
              alt="test"
            />
          </div>
          <div className="shop__text">
            <p>Shop Mattresses</p>
          </div>
        </Link>
        <Link className="shop__item --adj" to="/adjustable">
          <div className="shop__img">
            <StaticImage
              src="../../images/homePage/Adjustable630x420.jpeg"
              width={630}
              height={420}
              layout="constrained"
              alt="test"
            />
          </div>
          <div className="shop__text">
            <p>Shop Adjustables</p>
          </div>
        </Link>
        <Link className="shop__item --acc" to="/accessories/list">
          <div className="shop__img">
            <StaticImage
              src="../../images/homePage/Accessories630x420.jpeg"
              width={630}
              height={420}
              layout="constrained"
              alt="test"
            />
          </div>
          <div className="shop__text">
            <p>Shop Accessories</p>
          </div>
        </Link>
        <Link className="shop__item --chair" to="/x-chair">
          <div className="shop__img">
            <StaticImage
              src="../../images/homePage/XChair630x420.jpeg"
              width={630}
              height={420}
              layout="constrained"
              alt="test"
            />
          </div>
          <div className="shop__text">
            <p>Shop X-Chairs</p>
          </div>
        </Link>
      </ShopLinksRoot>
    </>
  );
}
