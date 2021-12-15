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
      <form>
        <input
          type={"file"}
          name="image"
          onChange={handleFileInputChange}
          value={fileInput}
        />
      </form>
    </div>
  );
};

export default UploadButton;
