import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colors, fonts, fontSize, rounded } from "../../styles/theme.styled";

const BrideyeWrapper = styled(OutboundLink)`
  /* 
  width: 100%;
 
  max-width: 187px;
  max-height: 130px;
  padding: 5px 5px;
 */
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
  /* max-width: 173px; */
  grid-template-columns: 85px 85px;
  /* grid-template-rows: 1fr 1fr; */
  /* max-height: 137px; */
  /* padding: 5px 5px; */
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
`;

const CertReview = styled.div`
  /* transition: all 0.25s ease-in;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
  }
  :focus {
    box-shadow: 0 0 0 3px ${colors.blue["300"]};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  width: 100%;
  max-width: 187px;
  max-height: 130px;
  flex: 1; */
  font-family: ${fonts.sans};
  /* background-color: ${colors.gray["100"]}; */
  display: flex;
  color: ${colors.blue["900"]};
  /* border-radius: 5px; */
  /* justify-content: space-between; */
  div h4 {
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    line-height: 1.1em;
    letter-spacing: 0.14em;
    div h4 {
      font-size: 1.2rem;
    }
  }
  @media print {
    color: black;
    box-shadow: none;
    text-shadow: none;
  }
`;

const Words = styled.div`
  padding: 7px 0 0 9px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-top: 10px;
    padding-left: 10px;
  }
`;
const Cert = styled.img`
  margin-top: -3px;
  /* margin-right: 7px; */
  width: 45px;
  justify-self: start;
  height: 70px;
  transform: scale(1);
`;

const Rating = styled.div`
  padding-top: 10px;
  display: flex;
  img {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 768px) {
    padding-top: 5px;
  }
`;

const AvgContainer = styled.div`
  margin-top: 2px;
  font-size: 0.8em;
  margin-left: 4px;
  font-family: ${fonts.sans};
  @media (min-width: 812px) {
    margin-top: 0px;
    font-size: 0.9em;
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
