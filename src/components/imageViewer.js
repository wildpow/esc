import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
import {
  ImgWrapper,
  SmallImgHolder,
  SmImg,
  LargeImg,
} from "../styles/imageViewerStyles";
import { Banner } from "./mattThumbNail/mattThumbStyles";

const BigBanner = styled(Banner)`
  font-size: 0.6rem;
  @media (min-width: 360px) and (orientation: portrait) {
    font-size: 0.7rem;
    margin-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    width: 75%;
    /* padding-right: 5px; */
    /* text-align: left; */
  }

  @media (max-width: 736px) and (orientation: landscape) {
    font-size: 0.8rem;
    margin-left: 0px;
    width: 80%;
    /* text-align: left; */
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
    /* text-align: left; */
  }
  @media print {
    font-size: 1.4rem;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    color: black;
    text-align: left;
  }
`;
class ImageViewer extends React.PureComponent {
  static propTypes = {
    cover: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
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
    const { cover, img1, img2, base, saleBanner } = this.props;
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
                  <LargeImg
                    src={ImagesArray[data].url}
                    alt={ImagesArray[data].alt}
                    style={{ position: "absolute" }}
                  />
                </div>
              ))}
            </div>
          )}
        </NodeGroup>
        <SmallImgHolder style={{ position: "relative" }} base={base}>
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={ImagesArray[0].url}
            data-id={0}
            alt={ImagesArray[0].alt}
          />
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={ImagesArray[1].url}
            data-id={1}
            alt={ImagesArray[1].alt}
          />
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={ImagesArray[2].url}
            data-id={2}
            alt={ImagesArray[2].alt}
          />
        </SmallImgHolder>
      </ImgWrapper>
    );
  }
}
export default ImageViewer;
