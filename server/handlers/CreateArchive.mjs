"use strict";

//require Mongodb
import { MongoClient } from "mongodb";

//get URI
import dotenv from "dotenv";

dotenv.config();

//{ path: "./server/.env" }
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all items from the database
// pagenated requires offset and quantity in the request body

export const getArchive = async (req, res) => {
  try {
    // const user = "auth0|61b26232f64d4a0072acb539";
    const { user } = req.params;
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");
    // check if the client already exists in the db

    const allUsersInfo = await db.listCollections().toArray();
    const users = allUsersInfo.map((i) => i.name);
    let ifUserExists = users.includes(user);
    if (!ifUserExists) {
      //if new user, create his archive collection
      await db.createCollection(user);
      await db.collection(user).insertOne({ _id: "My Archive", palettes: [] });
      const userArchives = await db.collection(user).find().toArray();
      await client.close();
      return res.status(200).json({
        status: 200,
        // data: currentStock,
        data: userArchives,
        new_user: true,
      });
    } else {
      //if old user, get his archive directly

      const userArchives = await db.collection(user).find().toArray();
      await client.close();
      return res.status(200).json({
        status: 200,
        data: userArchives,
        new_user: false,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      // data: currentStock,
      message: err.message,
    });
  }
};

export const createNewArchive = async (req, res) => {
  try {
    // const user = "auth0|61b26232f64d4a0072acb539";
    // const newArchive = "color-persona";
    const { user, newArchive } = req.body;
    const client = new MongoClient(MONGO_URI, options);
    if (newArchive === "") {
      return res.status(400).json({
        status: 400,
        message: `Archive can't be empty string`,
        new_user: undefined,
        success: false,
      });
    }
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");
    // check if the client already exists in the db

    const allUsersInfo = await db.listCollections().toArray();
    const users = allUsersInfo.map((i) => i.name);
    let ifUserExists = users.includes(user);
    if (!ifUserExists) {
      //if new user, create his archive collection
      await db.createCollection(user);
      await db.collection(user).insertOne({ _id: "My Archive", palettes: [] });
      await db.collection(user).insertOne({ _id: newArchive, palettes: [] });

      await client.close();
      return res.status(200).json({
        status: 200,
        message: `My Archive created, and ${newArchive} created`,
        new_user: true,
        success: true,
      });
    } else {
      // if old user
      //check if the archive already exists
      const userArchives = await db.collection(user).find().toArray();
      let ifArchiveExists = userArchives.some(
        (archive) => archive._id === newArchive
      );
      if (!ifArchiveExists) {
        await db.collection(user).insertOne({ _id: newArchive, palettes: [] });

        await client.close();
        return res.status(200).json({
          status: 200,
          message: "Archive Created",
          new_user: false,
          success: true,
        });
      } else {
        await client.close();

        return res.status(200).json({
          status: 200,
          new_user: false,
          message: "archive already exists",
          success: false,
        });
      }
      // create the new archive and get all the archive
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

// export handler function
