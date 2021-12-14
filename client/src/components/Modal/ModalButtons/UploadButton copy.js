// import React, { useState } from "react";
// import { Image } from "cloudinary-react";
// const UploadButton = ({ imageID, setImageID }) => {
//   const [fileInput, setFileInput] = useState("");
//   const [previewSource, setPreviewSource] = useState("");
//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewSource(reader.result);
//     };
//   };
//   const handleSubmitFile = (ev) => {
//     ev.preventDefault();
//     if (!previewSource) return;
//     uploadImage(previewSource);
//   };
//   const uploadImage = async (base64EncodedImage) => {
//     try {
//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: JSON.stringify({ data: base64EncodedImage }),
//         headers: { "Content-type": "application/json" },
//       })
//         .then((res) => res.json())
//         .then((result) => result.data);
//       setImageID(response.public_id);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   return (
//     <div>
//       <h3>Upload</h3>
//       <form onSubmit={handleSubmitFile}>
//         <input
//           type={"file"}
//           name="image"
//           onChange={handleFileInputChange}
//           value={fileInput}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {previewSource && (
//         <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
//       )}
//     </div>
//   );
// };

// export default UploadButton;
