import * as React from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import "./UploadImage.scss";
 
const maxNumber = 10;
const maxMbFileSize = 5;
class UploadImage extends React.Component {

  onChange = (imageList) => {
    this.props.callback(this.props.imageNumber, imageList);
  };

  render() {
    return (
      <ImageUploading
        onChange={this.onChange}
        maxNumber={maxNumber}
        multiple={false}
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png","jpeg"]}
        defaultValue={[]}>
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          <div className="">
            {!imageList.length ? 
              <Button
                className="add-action"
                variant="outlined"
                color="primary"
                onClick={onImageUpload}>
                  <AddIcon className="add-icon">
                    add
                  </AddIcon>
              </Button> : 
              undefined
            }

            {imageList.map((image) => (
              <div key={image.key}>
                <img 
                  src={image.dataURL} 
                  className="inner-image"
                  onClick={image.onUpdate}/>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    );
  }
}
UploadImage.propTypes = {};

export default UploadImage;


{/* 
  <div className="action-buttons">
    <Button
    className="actions"
    variant="contained"
    color="primary"
    onClick={image.onUpdate}>
      Update
  </Button>
  <Button
    className="actions"
    variant="contained"
    color="secondary"
    onClick={image.onRemove}>
      Remove
  </Button> 
  </div> 
*/}