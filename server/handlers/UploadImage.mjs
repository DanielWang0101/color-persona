import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } =
  process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
export const uploadImage = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml_default",
    });
    return res.status(200).json({
      status: 200,
      data: uploadedResponse,
      success: true,
    });
    // const uploadedResponse
  } catch (err) {
    console.log("🚀 ~ err", err.message);
    return res.status(400).json({
      status: 400,
      message: err.message,
      success: false,
    });
  }
};
