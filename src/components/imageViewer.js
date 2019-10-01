import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
import {
  ImgWrapper,
  SmallImgHolder,
  SmImgWrap,
  LargeImgWrap,
} from "../styles/imageViewerStyles";
import { Banner } from "./mattThumbNail/mattThumbStyles";
import { BigBannerPr1nt } from "../styles/_pr1nt/main";

const BigBanner = styled(Banner)`
  font-size: 0.6rem;
  @media (min-width: 360px) and (orientation: portrait) {
    font-size: 0.7rem;
    margin-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    width: 75%;
  }
  @media (max-width: 736px) and (orientation: landscape) {
    font-size: 0.8rem;
    margin-left: 0px;
    width: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 5px;
  }
  @media (min-width: 810px) and (orientation: landscape) {
    margin-left: 0;
    width: 75%;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    font-size: 1.1rem;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
    padding-right: 0px;
    width: 75%;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 1.3rem;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 20px;
    width: 70%;
  }
  ${BigBannerPr1nt}
`;
const objShape = {
  alt: PropTypes.string,
  url: PropTypes.string,
};
class ImageViewer extends React.PureComponent {
  static defaultProps = {
    base: false,
  };

  static propTypes = {
    cover: PropTypes.shape(objShape).isRequired,
    img1: PropTypes.shape(objShape).isRequired,
    img2: PropTypes.shape(objShape).isRequired,
    saleBanner: PropTypes.string.isRequired,
    base: PropTypes.bool,
    mattName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  changeActiveImage = event => {
    this.setState({
      currentImageIndex: Number(event.currentTarget.dataset.id),
    });
  };

  render() {
    const { cover, img1, img2, base, saleBanner, mattName } = this.props;
    const { currentImageIndex } = this.state;
    const ImagesArray = [cover, img1, img2];
    return (
      <ImgWrapper>
        <NodeGroup
          data={[currentImageIndex]}
          keyAccessor={d => d}
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
          {nodes => (
            <div style={{ position: "relative" }}>
              {nodes.map(({ key, data, state: { opacity } }) => (
                <div key={key} style={{ opacity, position: "relative" }}>
                  {data === 0 && saleBanner && (
                    <BigBanner>{saleBanner}</BigBanner>
                  )}
                  <LargeImgWrap style={{ position: "absolute" }}>
                    <Img
                      fluid={ImagesArray[data].fluid}
                      alt={
                        ImagesArray[data].alt === null
                          ? mattName
                          : ImagesArray[data].alt
                      }
                    />
                  </LargeImgWrap>
                </div>
              ))}
            </div>
          )}
        </NodeGroup>
        <SmallImgHolder style={{ position: "relative" }} base={base}>
          <SmImgWrap
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            data-id={0}
          >
            <Img
              fluid={ImagesArray[0].fluid}
              alt={ImagesArray[0].alt === null ? mattName : ImagesArray[0].alt}
            />
          </SmImgWrap>
          <SmImgWrap
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            data-id={1}
          >
            <Img
              fluid={ImagesArray[1].fluid}
              alt={ImagesArray[1].alt === null ? mattName : ImagesArray[0].alt}
            />
          </SmImgWrap>
          <SmImgWrap
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
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
  }
}
export default ImageViewer;
