/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ChairGallery({ images }) {
  // const none = "";
  return (
    <div>
      <h4>Gallery</h4>
      {images.map((img) => (
        <div key={img.base}>
          <GatsbyImage image={getImage(img)} />
        </div>
      ))}
    </div>
  );
}
