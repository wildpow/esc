import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colors, fonts, fontSize, rounded } from "../../styles/theme.styled";

const BrideyeWrapper = styled(OutboundLink)`
  text-decoration: none;
  display: grid;
  justify-content: space-between;
  background-color: ${colors.gray[100]};
  border-radius: ${rounded.md};
  border: 1px solid ${colors.gray[400]};
  font-family: ${fonts.sans};
  color: ${colors.blue["900"]};
  font-weight: 500;
  flex: 1;
  grid-template-columns: 85px 85px;
  .bird__cert {
    max-height: 80px;
    width: 100%;
    max-width: 60px;
    grid-column: 2/2;
    grid-row: 1/1;
    justify-self: center;
  }
  .bird__content {
    grid-column: 1/1;
    grid-row: 1/1;
    padding: 0 10px;
    font-size: ${fontSize.lg};
    justify-self: center;
    align-self: center;
    p {
      margin: 0;
    }
  }
  .bird__starWrapper {
    max-height: 100px;
    grid-row: 2/2;
    grid-column: 1/3;
    display: flex;
    padding: 10px 5px 10px 5px;
    justify-content: space-around;
  }
  .bird__star {
    max-width: 25px;
  }
  @media (min-width: 568px) {
    .bird__content {
      p {
        padding: 4 px 0 0 16 px;
      }
    }
  }
`;

const Bird = () => {
  const starsArr = [
    <img
      src="/star.png"
      alt="start for rating"
      loading="lazy"
      className="bird__star"
    />,
    <img
      src="/star.png"
      alt="start for rating"
      loading="lazy"
      className="bird__star"
    />,
    <img
      src="/star.png"
      alt="start for rating"
      loading="lazy"
      className="bird__star"
    />,
    <img
      src="/star.png"
      alt="start for rating"
      loading="lazy"
      className="bird__star"
    />,
    <img
      src="/star.png"
      alt="start for rating"
      loading="lazy"
      className="bird__star"
    />,
  ];
  let avgRating;
  let reviewCount;
  return (
    <StaticQuery
      query={graphql`
        query newBirdey {
          allWidget {
            nodes {
              reviewCount
              avgRating
            }
          }
        }
      `}
      render={(data) => {
        if (data.allWidget.nodes[0].avgRating) {
          avgRating = data.allWidget.nodes[0].avgRating;
          reviewCount = data.allWidget.nodes[0].reviewCount;
        } else {
          avgRating = data.allWidget.nodes[1].avgRating;
          reviewCount = data.allWidget.nodes[1].reviewCount;
        }
        // for (let i = 0; i < avgRating; i += 1) {
        //   starsArr.push(
        //     <img
        //       src="/star.png"
        //       alt="start for rating"
        //       key={i + 200}
        //       loading="lazy"
        //       className="bird__star"
        //     />
        //   );
        // }
        return (
          <>
            <BrideyeWrapper
              href="https://birdeye.com/esc-mattress-center-154743411347922"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bird__content">
                <p>
                  {reviewCount}
                  <br />
                  Certified
                  <br />
                  Reviews
                </p>
              </div>
              <div style={{ display: "none" }}>{avgRating}</div>
              <div className="bird__starWrapper">{starsArr}</div>
              <img
                alt="BirdEye certified seal"
                src="/badge.png"
                className="bird__cert"
                loading="lazy"
              />
            </BrideyeWrapper>
          </>
        );
      }}
    />
  );
};

export default Bird;
