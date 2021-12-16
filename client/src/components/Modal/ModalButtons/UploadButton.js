import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { Button } from "./styled-components";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { Input, Label, AnimatedText } from "./styled-components";
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
      <Input
        type={"file"}
        id="file"
        name="image"
        onChange={handleFileInputChange}
        value={fileInput}
      />
      <Label for="file">
        <BsFillCloudUploadFill />
        Upload a Photo
      </Label>
    </div>
  );
};

export default UploadButton;
