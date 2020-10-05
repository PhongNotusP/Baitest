import React from "react";
import PropTypes from "prop-types";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};
const getRandomImageUrl = () => {
  const RandomId = Math.trunc(Math.random() * 1000);
  return `https://i.picsum.photos/id/${RandomId}/300/300.jpg`;
};
function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ui chưa có hình, Chọn 1 hình"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
