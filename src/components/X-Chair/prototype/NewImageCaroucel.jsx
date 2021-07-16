import { useState } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
import {
  ImgWrapper,
  SmallImgHolder,
  SmImgWrap,
  LargeImgWrap,
} from "../../ProductPage/ImageCarousel/imageCarousel.styled";

const LargeChairImgWrap = styled(LargeImgWrap)`
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 600px;
    height: 600px;
  }
`;
const ChairSmWrap = styled(SmImgWrap)`
  @media (min-width: 768px) {
    width: calc(400px / 3);
    height: 148px;
  }
  @media (min-width: 1024px) {
    width: 168px;
    width: calc(400px / 3);
    height: 167px;
  }
`;
const ImageCarousel = ({ imagesArray, alt }) => {
  const [index, setIndex] = useState(0);
  // const ImagesArray = [cover, img1, img2];

  return (
    <ImgWrapper>
      <NodeGroup
        data={[index]}
        keyAccessor={(d) => d}
        start={() => ({
          opacity: 0,
        })}
        enter={() => ({
          opacity: [1],
          timing: { duration: 300 },
        })}
        update={() => ({
          opacity: [1],
          timing: { duration: 300 },
        })}
        leave={() => ({
          opacity: [0],
          timing: { duration: 300 },
        })}
      >
        {(nodes) => (
          <LargeChairImgWrap>
            {nodes.map(({ key, data, state: { opacity } }) => (
              <div key={key} style={{ opacity, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <GatsbyImage image={getImage(imagesArray[data])} alt={alt} />
                </div>
              </div>
            ))}
          </LargeChairImgWrap>
        )}
      </NodeGroup>
      <SmallImgHolder>
        {imagesArray.map((img, i) => (
          <ChairSmWrap
            key={`carouselImg${i + 3}`}
            onMouseOver={(e) => setIndex(Number(e.currentTarget.dataset.id))}
            onFocus={(e) => setIndex(Number(e.currentTarget.dataset.id))}
            data-id={i}
            active={index === i}
          >
            <GatsbyImage image={getImage(img)} alt={alt} />
          </ChairSmWrap>
        ))}
      </SmallImgHolder>
    </ImgWrapper>
  );
};

ImageCarousel.propTypes = {
  imagesArray: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string,
};
ImageCarousel.defaultProps = {
  alt: "The all-new X-Chair advances the function of office seating. It is distinctly stylish, budget friendly, and made with proprietary ergonomic comfort technology that has never before been applied to office seating.",
};

export default ImageCarousel;
