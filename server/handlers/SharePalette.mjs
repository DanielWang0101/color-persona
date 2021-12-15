"use strict";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "cloudinary";

// uuidv4();
//require Mongodb
import { MongoClient } from "mongodb";
//get URI
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
//{ path: "./server/.env" }
//cloudinary
const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } =
  process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
//mongo
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const collectionName = "Public";
// this PUT function will add user's color palette to their designated archive.
export const sharePalette = async (req, res) => {
  //create a new client
  const client = new MongoClient(MONGO_URI, options);
  // connect to the client
  await client.connect();

  try {
    //info required
    // const colors = ["#8FE1FF", "#4CAED2", "#21c4ff", "#FF5B1F", "#D2704C"];
    // const user = "auth0|61b26232f64d4a0072acb539";
    // const archiveName = "color-persona";
    // const paletteName = "My Color Theme";
    // const name = "d.wang20161@gmail.com";
    // const picture =
    //   "https://s.gravatar.com/avatar/4ec76de9ecec0cc6b261bc61c3463581?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fd.png";
    // const email = "d.wang20161@gmail.com";
    // const thumb =
    //   "https://images.unsplash.com/photo-1596536220655-21429cf12ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI2OTN8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwYXJ0fGVufDB8fHx8MTYzOTM2MDkwNg&ixlib=rb-1.2.1&q=80&w=200";
    // const regular =
    //   "https://images.unsplash.com/photo-1596536220655-21429cf12ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI2OTN8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwYXJ0fGVufDB8fHx8MTYzOTM2MDkwNg&ixlib=rb-1.2.1&q=80&w=1080";
    // const sub = "auth0|61b26232f64d4a0072acb539";
    const {
      id,
      user,
      name,
      picture,
      email,
      colors,
      archiveName,
      paletteName,
      // publicId,
      // regular,
      previewSource,
    } = req.body;
    if (archiveName === "select an option") {
      return res.status(400).json({
        status: 400,
        message: "Please select an option",
        success: false,
      });
    }

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");
    //
    // check if there's a Public collection

    const allUsersInfo = await db.listCollections().toArray();
    const users = allUsersInfo.map((i) => i.name);
    let ifPublicExists = users.includes(collectionName);
    if (!ifPublicExists) {
      //if Public does not exist, create this collection
      await db.createCollection(collectionName);
      if (previewSource) {
        const uploadedResponse = await cloudinary.uploader.upload(
          previewSource,
          {
            upload_preset: "ml_default",
          }
        );
        const publicId = uploadedResponse.public_id;
        const regular = uploadedResponse.url;
        // create this Public document
        await db.collection(collectionName).insertOne({
          _id: id,
          user,
          name,
          picture,
          email,
          colors,
          archiveName,
          paletteName,
          publicId,
          regular,
          created_at: Date.now(),
          public: true,
        });
        // Update user's archive
        await db.collection(user).updateOne(
          { _id: archiveName, "palettes._id": id },
          {
            $set: {
              "palettes.$.shared": true,
            },
          }
        );
        await client.close();
        return res.status(200).json({
          status: 200,
          message: "Palette Shared",
          success: true,
        });
      } else {
        await db.collection(collectionName).insertOne({
          _id: id,
          user,
          name,
          picture,
          email,
          colors,
          archiveName,
          paletteName,
          created_at: Date.now(),
          public: true,
        });
        // Update user's archive
        await db.collection(user).updateOne(
          { _id: archiveName, "palettes._id": id },
          {
            $set: {
              "palettes.$.shared": true,
            },
          }
        );
        await client.close();
        return res.status(200).json({
          status: 200,
          message: "Palette Shared",
          success: true,
        });
      }
    } else {
      // if Public exists
      if (previewSource) {
        const uploadedResponse = await cloudinary.uploader.upload(
          previewSource,
          {
            upload_preset: "ml_default",
          }
        );
        const publicId = uploadedResponse.public_id;
        const regular = uploadedResponse.url;

        //insert the document into Public collection
        await db.collection(collectionName).insertOne({
          _id: id,
          user,
          name,
          picture,
          email,
          colors,
          archiveName,
          paletteName,
          publicId,
          regular,
          created_at: Date.now(),
          public: true,
        });
        // Update user's archive
        await db.collection(user).updateOne(
          { _id: archiveName, "palettes._id": id },
          {
            $set: {
              "palettes.$.shared": true,
            },
          }
        );
        // const userArchive = await db
        //   .collection(collectionName)
        //   .find()
        //   .toArray();
        await client.close();

        return res.status(200).json({
          status: 200,
          message: "Palette Shared",
          success: true,
        });
      } else {
        //insert the document into Public collection
        await db.collection(collectionName).insertOne({
          _id: id,
          user,
          name,
          picture,
          email,
          colors,
          archiveName,
          paletteName,
          created_at: Date.now(),
          public: true,
        });
        // Update user's archive
        await db.collection(user).updateOne(
          { _id: archiveName, "palettes._id": id },
          {
            $set: {
              "palettes.$.shared": true,
            },
          }
        );
        // const userArchive = await db
        //   .collection(collectionName)
        //   .find()
        //   .toArray();
        await client.close();

        return res.status(200).json({
          status: 200,
          message: "Palette Shared",
          success: true,
        });
      }
    }
  } catch (err) {
    await client.close();

    return res.status(400).json({
      status: 400,
      message: err.message,
      success: false,
    });
  }
};

// const test = async () => {
//   const user = "auth0|61b26232f64d4a0072acb539";
//   const id = "d933107a-1966-47e0-91d0-49bd5e806332";
//   const archiveName = "test";
//   //create a new client
//   const client = new MongoClient(MONGO_URI, options);
//   // connect to the client
//   try {
//     await client.connect();
//     const db = client.db("color-persona");
//     console.log("CONNECTED");
//     await db.collection(user).updateOne(
//       { _id: archiveName, "palettes._id": id },
//       {
//         $set: {
//           "palettes.$.shared": true,
//         },
//       }
//     );

//     await client.close();
//     console.log("success");
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// test();
