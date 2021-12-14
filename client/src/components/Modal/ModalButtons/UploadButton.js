import React, { useState } from "react";
import { Image } from "cloudinary-react";
const UploadButton = ({
  imageID,
  setImageID,
  previewSource,
  setPreviewSource,
}) => {
  const [fileInput, setFileInput] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (ev) => {
    ev.preventDefault();
    if (!previewSource) return;
  };

  return (
    <div>
      <h3>Upload</h3>
      <form>
        <input
          type={"file"}
          name="image"
          onChange={handleFileInputChange}
          value={fileInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadButton;
