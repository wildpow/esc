import { useState } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
import {
  ImgWrapper,
  SmallImgHolder,
  SmImgWrap,
  LargeImgWrap,
  BigBanner,
} from "./ImageCarousel.styled";
import FirmnessScale from "./FirmnessScaleDesktop";

const ImageCarousel = ({
  base,
  cover,
  img1,
  img2,
  mattName,
  saleBanner,
  isMobile,
  firmness,
}) => {
  const [index, setIndex] = useState(0);
  const ImagesArray = [cover, img1, img2];

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
          <LargeImgWrap>
            {nodes.map(({ key, data, state: { opacity } }) => (
              <div key={key} style={{ opacity, position: "relative" }}>
                {data === 0 && saleBanner && (
                  <BigBanner>{saleBanner}</BigBanner>
                )}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Img
                    fluid={ImagesArray[data].fluid}
                    alt={
                      ImagesArray[data].alt === null
                        ? mattName
                        : ImagesArray[data].alt
                    }
                  />
                </div>
              </div>
            ))}
            {!base && <FirmnessScale isMobile={isMobile} firmNum={firmness} />}
          </LargeImgWrap>
        )}
      </NodeGroup>
      <SmallImgHolder base={base}>
        <SmImgWrap
          onMouseOver={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          onFocus={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          data-id={0}
        >
          <Img
            fluid={ImagesArray[0].fluid}
            alt={ImagesArray[0].alt === null ? mattName : ImagesArray[0].alt}
          />
        </SmImgWrap>
        <SmImgWrap
          onMouseOver={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          onFocus={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          data-id={1}
        >
          <Img
            fluid={ImagesArray[1].fluid}
            alt={ImagesArray[1].alt === null ? mattName : ImagesArray[0].alt}
          />
        </SmImgWrap>
        <SmImgWrap
          onMouseOver={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          onFocus={(e) => setIndex(Number(e.currentTarget.dataset.id))}
          data-id={2}
        >
          <Img
            fluid={ImagesArray[2].fluid}
            alt={ImagesArray[2].alt === null ? mattName : ImagesArray[0].alt}
          />
        </SmImgWrap>
      </SmallImgHolder>
    </ImgWrapper>
  );
};

const objShape = {
  alt: PropTypes.string,
  url: PropTypes.string,
};

ImageCarousel.propTypes = {
  firmness: PropTypes.number,
  isMobile: PropTypes.bool,
  base: PropTypes.bool,
  cover: PropTypes.shape(objShape).isRequired,
  img1: PropTypes.shape(objShape).isRequired,
  img2: PropTypes.shape(objShape).isRequired,
  mattName: PropTypes.string,
  saleBanner: PropTypes.string.isRequired,
};

ImageCarousel.defaultProps = {
  base: false,
  firmness: 0,
  isMobile: false,
  mattName: "test",
};

export default ImageCarousel;
