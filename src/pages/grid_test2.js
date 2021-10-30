import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
// import GridOverlay from "../components/Grid/GridOverlay";
import Layout from "../components/Layout";
import {
  boxShadow,
  boxShadowHover,
  colors,
  fonts,
  fontSize,
  radius,
  rounded,
  spacing,
} from "../styles/theme.styled";
import Bird from "../components/Grid/NewBird";

const HomeRoot = styled.div`
  position: relative;
  padding: 0 16px;
  display: grid;
  grid-auto-rows: minmax(60px, auto);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
  max-width: 1536px;
  margin: 0 auto;
  /* remove this in production */
  padding-bottom: 100px;
  /* ----- */
  .home__why {
    ::after {
      content: "";
      width: 100%;
      background-color: rgba(44, 82, 130, 1);

      height: 16px;
      grid-row: 3/4;
      grid-column: 1/13;
      position: relative;
      bottom: 32px;
      z-index: 10;
    }
    grid-row: 4/7;
    grid-column: 1/13;
    grid-template-rows: 40px 450px 40px;
    /* max-height: 600px;
    height: 100%; */
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    display: grid;

    .home__why__icons {
      grid-column: 6/13;
      grid-row: 2/5;
      position: relative;
      bottom: 26px;
      z-index: 10;
      align-self: flex-end;
      z-index: 100;
      /* bottom: 40px; */
      position: relative;
      z-index: 100;
      /* display: grid;
      grid-template-columns: repeat(7, 1fr); */
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      .home__why__icons__bbb {
        /* grid-column: 1/3; */
        display: flex;
        justify-content: center;
        background-color: ${colors.gray[100]};
        border-radius: ${rounded.md};
        border: 1px solid ${colors.gray[400]};
        padding: 5px;
        max-width: 175px;
      }
      .home__why__icons__reviews {
        /* grid-column: 3/5; */
        display: flex;
        justify-content: center;
      }
      .home__why__icons__readers {
        /* grid-column: 5/7; */
        display: flex;
        justify-content: center;
      }
    }

    .home__why__info {
      grid-gap: 16px;
      max-height: 506px;
      ::after {
        content: "";
        width: 100%;
        background-color: rgba(155, 44, 44, 0.4);
        height: 16px;
        grid-row: 1/1;
        align-self: flex-end;
        position: relative;
        top: 2px;
        grid-column: 1/8;
      }
      grid-column: 6/13;
      grid-row: 2/5;
      /* height: 100%; */
      /* max-height: 400px; */
      background-color: white;
      /* box-shadow: ${boxShadow.md}; */
      box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
        rgba(71, 63, 79, 0.08) 0px 2px 4px;
      z-index: 10;
      grid-template-columns: repeat(7, 1fr);
      display: grid;
      grid-auto-rows: 80px 450px 80px;

      h2,
      p {
        grid-column: 2/7;
        margin: 0;
      }
      h2 {
        font-family: ${fonts.sans};
        grid-row: 1/2;
        align-self: flex-end;
        font-size: ${fontSize["3xl"]};
      }
      p {
        font-family: ${fonts.serif};
        font-size: ${fontSize.lg};
        line-height: ${spacing[8]};
        grid-row: 2/2;
      }
    }
    .home__why__img {
      grid-row: 1/3;
      grid-column: 1/7;
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  .home__hero {
    grid-column: 1/13;
    grid-row: 1/1;
    max-height: 800px;
    height: 100%;
    flex: 1;
    display: flex;
    ${boxShadowHover}
  }
  .home__buy {
    grid-column: 1/13;
    grid-row: 2/3;
    grid-auto-rows: minmax(60px, auto);
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    display: grid;
    .home__buy__item {
      ${boxShadowHover}
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      display: grid;

      /* max-height: 200px; */
      .home__buy__text {
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

      .home__buy__img {
        grid-column: 1/4;
        grid-row: 1/3;
        display: flex;
        max-height: 200px;
      }
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
  }
  @media (min-width: 650px) {
    .home__buy {
      .home__buy__item {
        .home__buy__img {
          max-height: 250px;
        }
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
  }
  @media (min-width: 1250px) {
    .home__buy {
      .home__buy__item {
        .home__buy__img {
          display: initial;
          max-height: initial;
        }
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
  }
`;

export default function GridTest2() {
  return (
    <Layout>
      <HomeRoot>
        {/* <GridOverlay /> */}
        <div className="home__hero">
          <StaticImage
            src="../images/gridTest/stuff.png"
            width={1536}
            height={1236}
            layout="constrained"
            alt="test"
          />
        </div>
        <div className="home__buy">
          <div className="home__buy__item --matt">
            <div className="home__buy__img">
              <StaticImage
                src="../images/gridTest/satisfiediiptroom.jpeg"
                width={630}
                height={420}
                layout="constrained"
                alt="test"
              />
            </div>
            <div className="home__buy__text">
              <p>Shop Mattresses</p>
            </div>
          </div>
          <div className="home__buy__item --adj">
            <div className="home__buy__img">
              <StaticImage
                src="../images/gridTest/satisfiediiptroom.jpeg"
                width={630}
                height={420}
                layout="constrained"
                alt="test"
              />
            </div>
            <div className="home__buy__text">
              <p>Shop Adjustables</p>
            </div>
          </div>
          <div className="home__buy__item --acc">
            <div className="home__buy__img">
              <StaticImage
                src="../images/gridTest/satisfiediiptroom.jpeg"
                width={630}
                height={420}
                layout="constrained"
                alt="test"
              />
            </div>
            <div className="home__buy__text">
              <p>Shop Accessories</p>
            </div>
          </div>
          <div className="home__buy__item --chair">
            <div className="home__buy__img">
              <StaticImage
                src="../images/gridTest/satisfiediiptroom.jpeg"
                width={630}
                height={420}
                layout="constrained"
                alt="test"
              />
            </div>
            <div className="home__buy__text">
              <p>Shop X-Chairs</p>
            </div>
          </div>
        </div>
        <div className="home__why">
          <div className="home__why__img">
            <StaticImage
              src="../images/gridTest/harvestgreenlifestylebrandimage560x228.jpeg"
              width={830}
              height={520}
              layout="constrained"
              alt="test"
            />
          </div>
          <div className="home__why__info">
            <h2>Why shop at E.S.C. Mattress Center?</h2>
            <p>
              At ESC Mattress Center we have over twenty years industry
              experience -- we are the sleep experts and we want to help educate
              you so you can get the great sleep you deserve. With our
              customer-friendly 90 day comfort guarantee we've got your back in
              case you're not 100% satisfied with your purchase.
            </p>
          </div>
          <div className="home__why__icons">
            <div className="home__why__icons__bbb">
              <a
                href="https://www.bbb.org/us/wa/everett/profile/mattress/esc-mattress-center-1296-1000056497/#sealclick"
                target="_blank"
                rel="nofollow noreferrer"
                style={{ width: "100%" }}
              >
                <img
                  // width={187}
                  // height={130}
                  loading="lazy"
                  src="https://seal-hawaii.bbb.org/seals/darkgray-seal-187-130-bbb-1000056497.png"
                  style={{ border: 0, width: "100%" }}
                  alt="ESC Mattress Center BBB Business Review"
                />
              </a>
            </div>
            <div className="home__why__icons__reviews">
              <Bird />
            </div>
            <div className="home__why__icons__readers">
              <StaticImage
                src="../images/gridTest/readerschoicewinner2019.png"
                width={160}
                height={160}
                layout="constrained"
                alt="test"
              />
            </div>
          </div>
        </div>
      </HomeRoot>
    </Layout>
  );
}
