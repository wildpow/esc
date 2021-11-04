import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Bird from "./NewBird";
import { boxShadow, colors, fonts, rounded } from "../../styles/theme.styled";

const WhyRoot = styled.section`
  /* grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 181px 45px 1fr 1fr;
  display: grid; */
  /* grid-gap: 16px; */
  grid-row: 4/7;
  grid-column: 1/13;
  /* display: flex;
  flex-direction: column; */
  grid-template-columns: repeat(12, 1fr);
  display: grid;
  position: relative;
  column-gap: 16px;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 16px;
    background-color: ${colors.brandRed};
    bottom: 0;
    left: 0;
    grid-column: 1/13;
    grid-row: 1/2;
  }
  .why__img {
    grid-column: 1/13;
    grid-row: 1/2;
    /* margin: 0 -16px; */
  }
  .why__info {
    position: relative;
    ::after {
      content: "";
      width: 100%;
      background-color: ${colors.brandBlue};
      height: 16px;
      align-self: flex-end;
      position: absolute;
      bottom: 0px;
      left: 0;
      /* grid-column: 1/8; */
    }
    box-shadow: ${boxShadow.md};
    /* position: relative;
    ::after {
      content: "";
      width: 100%;
      background-color: ${colors.brandBlue};
      height: 16px;

      align-self: flex-end;
      position: absolute;
      bottom: 0px;
      left: 0;
    } */
    padding: 10px 10px 10px 10px;
    /* margin: 0 16px; */
    grid-row: 2/3;
    grid-column: 2/12;
    background-color: white;
    margin-top: -75px;
    /* position: relative; */
    z-index: 1;
    h2 {
      margin: 0;
      font-family: ${fonts.sans};
    }
    p {
      font-family: ${fonts.serif};
      line-height: 1.3rem;
    }
  }
  .why__icons {
    /* box-shadow: ${boxShadow.md}; */

    grid-row: 3/4;
    grid-column: 2/12;
    display: flex;
    /* margin: 0 15px; */
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding: 10px; */
    background-color: white;
    /* flex-direction: column; */
    gap: 10px;
    padding-bottom: 20px;
    position: relative;
  }
  .why__icons__bbb {
    padding: 5px 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 172px;
    background-color: ${colors.gray[100]};
    border-radius: ${rounded.md};
    border: 1px solid ${colors.gray[400]};
  }
  .why__icons__reviews {
    max-width: 172px;
  }
  .why__icons__readers {
  }
  @media (min-width: 568px) {
    .why__icons__bbb {
      padding: 0px 8px;
    }
    .why__info {
      margin-top: -50px;
    }

    /* .why__info {
      padding: 10px 0;
      grid-template-columns: repeat(10, 1fr);
      column-gap: 16px;
      display: grid;
      h2 {
        grid-column: 2/9;
        grid-row: 1/2;
      }
      p {
        grid-column: 2/9;
        grid-row: 2/3;
      }
    } */
  }
`;

export default function WhyEsc() {
  // Why E.S.C section
  return (
    <WhyRoot>
      <div className="why__img">
        <StaticImage
          src="../../images/gridTest/harvestgreenlifestylebrandimage560x228.jpeg"
          width={830}
          height={520}
          layout="constrained"
          alt="test"
        />
      </div>
      <div className="why__info">
        <h2>Why shop at E.S.C. Mattress Center?</h2>
        <p>
          At ESC Mattress Center we have over twenty years industry experience
          -- we are the sleep experts and we want to help educate you so you can
          get the great sleep you deserve. With our customer-friendly 90 day
          comfort guarantee we&apos;ve got your back in case you&apos;re not
          100% satisfied with your purchase.
        </p>
        <div className="why__icons">
          <div className="why__icons__bbb">
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
          <div className="why__icons__reviews">
            <Bird />
          </div>
          <div className="why__icons__readers">
            <StaticImage
              src="../../images/gridTest/readerschoicewinner2019.png"
              width={160}
              height={160}
              layout="constrained"
              alt="test"
            />
          </div>
        </div>
      </div>
    </WhyRoot>
  );
}
