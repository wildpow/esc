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
  rounded,
  spacing,
} from "../styles/theme.styled";
import Bird from "../components/Grid/NewBird";
import AboveTheFold from "../components/Grid/AboveTheFold";

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
    grid-row: 4/7;
    grid-column: 1/13;
    grid-template-rows: 40px 450px 40px;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    display: grid;
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
    .home__why__icons {
      grid-column: 6/13;
      grid-row: 2/5;
      position: relative;
      bottom: 26px;
      z-index: 10;
      align-self: flex-end;
      z-index: 100;
      position: relative;
      z-index: 100;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      .home__why__icons__bbb {
        display: flex;
        justify-content: center;
        background-color: ${colors.gray[100]};
        border-radius: ${rounded.md};
        border: 1px solid ${colors.gray[400]};
        padding: 5px;
        max-width: 175px;
      }
      .home__why__icons__reviews {
        display: flex;
        justify-content: center;
      }
      .home__why__icons__readers {
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
      background-color: white;
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

  @media (min-width: 650px) {
  }
  @media (min-width: 1250px) {
  }
`;

export default function GridTest2() {
  return (
    <Layout>
      <HomeRoot>
        <AboveTheFold />
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
              customer-friendly 90 day comfort guarantee we&apos;ve got your
              back in case you&apos;re not 100% satisfied with your purchase.
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
