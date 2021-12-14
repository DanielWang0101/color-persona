"use strict";
import { v4 as uuidv4 } from "uuid";
// uuidv4();
//require Mongodb
import { MongoClient } from "mongodb";
//get URI
import dotenv from "dotenv";
import assert from "assert";
dotenv.config();

//{ path: "./server/.env" }
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// this PUT function will add user's color palette to their designated archive.
export const savePalette = async (req, res) => {
  try {
    //info required
    // const colors = ["#8FE1FF", "#4CAED2", "#21c4ff", "#FF5B1F", "#D2704C"];
    // const user = "auth0|61b26232f64d4a0072acb539";
    // const archiveName = "color-persona";
    // const paletteName = "My Color Theme";

    // user: user.sub,
    // name: user.name,
    // picture: user.picture,
    // email: user.email,
    // colors: [colorA, colorB, baseColor, colorD, colorE],59df54a3-83c7-4b87-aa89-ba49305fa3a4
    // archiveName: selectedArchive,
    // paletteName,
    const { id, colors, user, name, picture, email, archiveName, paletteName } =
      req.body;

    if (archiveName === "select an option") {
      return res.status(400).json({
        status: 400,
        message: "Please select an option",
        success: false,
      });
    }
    //create a new client
    const client = new MongoClient(MONGO_URI, options);
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");

    //
    // check if the client already exists in the db

    const allUsersInfo = await db.listCollections().toArray();
    const users = allUsersInfo.map((i) => i.name);
    let ifUserExists = users.includes(user);
    if (!ifUserExists) {
      //if new user, create his archive collection
      await db.createCollection(user);
      // create his default archive document
      await db.collection(user).insertOne({ _id: "My Archive" });
      // create his new archive document
      await db.collection(user).insertOne({ _id: archiveName });
      // check if the id exists in the community
      const publicPost = await db.collection("Public").findOne({ _id: id });
      if (!publicPost) {
        //insert the information into this new document
        await db.collection(user).updateOne(
          { _id: archiveName },
          {
            $push: {
              palettes: {
                _id: id,
                user: user,
                paletteName,
                colors,
                name,
                picture,
                email,
                archiveName,
                orginial: true,
              },
            },
          }
        );
      } else if (publicPost) {
        await db.collection(user).updateOne(
          { _id: archiveName },
          {
            $push: {
              palettes: {
                _id: id,
                user: publicPost.user,
                paletteName,
                colors,
                name: publicPost.name,
                picture: publicPost.picture,
                email: publicPost.email,
                archiveName,
                orginial: false,
              },
            },
          }
        );
      }

      // update public archive
      await db.collection("Public").updateOne(
        { _id: id },
        {
          $set: {
            saved: true,
          },
        }
      );
      await client.close();
      return res.status(200).json({
        status: 200,
        new_user: true,
        message: "Palette Saved",
        success: true,
      });
    } else {
      // if old user
      //insert the information into this new document
      // check if the id exists in the community
      const publicPost = await db.collection("Public").findOne({ _id: id });
      if (!publicPost) {
        //insert the information into this new document
        await db.collection(user).updateOne(
          { _id: archiveName },
          {
            $push: {
              palettes: {
                _id: id,
                user: user,
                paletteName,
                colors,
                name,
                picture,
                email,
                archiveName,
                orginial: true,
              },
            },
          }
        );
      } else if (publicPost) {
        await db.collection(user).updateOne(
          { _id: archiveName },
          {
            $push: {
              palettes: {
                _id: id,
                user: publicPost.user,
                paletteName,
                colors,
                name: publicPost.name,
                picture: publicPost.picture,
                email: publicPost.email,
                archiveName,
                orginial: false,
              },
            },
          }
        );
      }
      // update public archive
      const validation = await db.collection("Public").updateOne(
        { _id: id },
        {
          $set: {
            saved: true,
          },
        }
      );

      await client.close();
      return res.status(200).json({
        status: 200,
        new_user: false,
        message: "Palette Saved",
        success: true,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message,
      success: false,
    });
  }
};
// const test = async () => {
//   const user = "google-oauth2|102882651941532691840";
//   const id = "e6c3b184-b110-4dbf-ae38-3c9489d28ac0";
//   const archiveName = "test";
//   //create a new client
//   const client = new MongoClient(MONGO_URI, options);
//   // connect to the client
//   try {
//     await client.connect();
//     const db = client.db("color-persona");
//     console.log("CONNECTED");
//     const result = await db.collection("Public").findOne({ _id: id });

//     await client.close();
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// test();

// collection user
/*
{_id:"My Archive"}
{_id:"Color Persona"}

{
  _id:"My Archive",
  palettes:[
    {_id:"UUID", name: "My Color Theme", colors:[]},
    {_id:"UUID", name: "My Color Theme", colors:[]},
    {_id:"UUID", name: "My Color Theme", colors:[]},
  ]
}

{
  _id:"Color Persona",
  palettes:[
    {_id:"UUID", name: "My Color Theme", colors:[]},
    {_id:"UUID", name: "My Color Theme", colors:[]},
    {_id:"UUID", name: "My Color Theme", colors:[]},
  ]
}

*/

// export handler function
