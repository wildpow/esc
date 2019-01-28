import React from "react";
import PropTypes from "prop-types";
import NodeGroup from "react-move/NodeGroup";
import {
  ImgWrapper,
  SmallImgHolder,
  SmImg,
  LargeImg,
} from "../styles/imageViewerStyles";

class ImageViewer extends React.PureComponent {
  static propTypes = {
    cover: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
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
    const { cover, img1, img2, fullname, type } = this.props;
    const { currentImageIndex } = this.state;
    const ImagesArray = [cover, img1, img2];
    return (
      <ImgWrapper style={{ position: "relative" }}>
        <NodeGroup
          style={{ position: "relative" }}
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
                  <LargeImg
                    src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${
                      ImagesArray[data]
                    }`}
                    alt={`Large image of ${fullname} ${type}`}
                    style={{ position: "absolute" }}
                  />
                </div>
              ))}
            </div>
          )}
        </NodeGroup>
        <SmallImgHolder style={{ position: "relative" }}>
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${
              ImagesArray[0]
            }`}
            data-id={0}
            alt={`Small image of ${fullname} ${type}`}
          />
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${
              ImagesArray[1]
            }`}
            data-id={1}
            alt={`Small image of ${fullname} ${type}`}
          />
          <SmImg
            onMouseOver={this.changeActiveImage}
            onFocus={this.changeActiveImage}
            src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${
              ImagesArray[2]
            }`}
            data-id={2}
            alt={`Small image of ${fullname} ${type}`}
          />
        </SmallImgHolder>
      </ImgWrapper>
    );
  }
}
export default ImageViewer;
