import { styled } from "linaria/react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "../../contexts/WindowSize.ctx";
import {
  fonts,
  fontSize,
  spacing,
  breakpoints,
  colors,
  boxShadow,
} from "../../styles/theme.styled";

const BrandsWrapper = styled.div`
  background-color: ${colors.blue[900]};
  box-shadow: ${boxShadow["2xl"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .brand__container {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 15px;
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .brand_img {
    justify-self: center;
    width: 100%;
    width: 300px;
  }
  p {
    color: white;
    font-family: ${fonts.serif};
    padding-top: 40px;
    font-size: ${fontSize["2xl"]};
    padding-bottom: 40px;
    max-width: 768px;
    text-align: center;
    margin-top: 0;
    line-height: ${spacing[10]};
  }

  @media (min-width: ${breakpoints.lg}) {
    background-color: ${colors.blue[900]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    .brand__container {
      overflow-x: auto;
      overflow-y: auto;
      padding-top: 40px;
      padding-bottom: 40px;
      max-width: 1320px;
      display: grid;
      grid-template-columns: repeat(3, minMax(200px, 450px));
      grid-gap: 35px;
      justify-content: center;
    }
    .brand_img {
      justify-self: center;
      width: 100%;
      max-width: 300px;
    }
    p {
      color: white;
      font-family: ${fonts.serif};
      padding-top: 40px;
      font-size: ${fontSize["2xl"]};
      padding-bottom: 40px;
      max-width: 1320px;
      width: 85%;
      text-align: center;
      margin-top: 0;
      line-height: ${spacing[10]};
    }
  }
`;
const StyledCarousel = styled.div`
  background-color: ${colors.blue[900]};
  width: 100%;
  padding: 3em 0 4em 0;

  .brand_img {
    padding-right: 40px;
    padding-left: 40px;
    background-color: ${colors.blue[900]};
    display: flex;
    justify-content: center;
    img {
      /* width: 400px; */
    }
  }
  p {
    color: white;
    font-family: ${fonts.serif};
    padding-top: 2em;
    font-size: ${fontSize.base};
    max-width: 768px;
    line-height: ${spacing[6]};
    padding-left: 5px;
    padding-right: 5px;
    background-color: ${colors.blue[900]};
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: 6em 0;
    p {
      max-width: 1320px;
      width: 90%;
      font-size: ${fontSize.lg};
      line-height: ${spacing[8]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    p {
      width: 85%;
      font-size: ${fontSize.lg};
      line-height: ${spacing[8]};
    }
  }
`;
const AboutBrands = ({ brandImages, brandText }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 1100 ? (
        <StyledCarousel>
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            interval={3500}
            transitionTime={3300}
            centerMode
            centerSlidePercentage={50}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            stopOnHover={false}
          >
            {brandImages.map((img) => (
              <div className="brand_img" key={img.alt}>
                <GatsbyImage
                  image={getImage(img)}
                  style={{ width: "400px" }}
                  alt={img.alt}
                />
              </div>
            ))}
          </Carousel>
          <p>{brandText}</p>
        </StyledCarousel>
      ) : (
        <BrandsWrapper>
          <div className="brand__container">
            {brandImages.map((img) => (
              <div className="brand_img" key={img.alt}>
                <GatsbyImage image={getImage(img)} alt={img.alt} />
              </div>
            ))}
          </div>
          <p>{brandText}</p>
        </BrandsWrapper>
      )}
    </>
  );
};
AboutBrands.propTypes = {
  brandText: PropTypes.string.isRequired,
  brandImages: PropTypes.instanceOf(Object).isRequired,
};
export default AboutBrands;
