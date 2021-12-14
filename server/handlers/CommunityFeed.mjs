"use strict";
import { v4 as uuidv4 } from "uuid";
// uuidv4();
//require Mongodb
import { MongoClient } from "mongodb";
//get URI
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

//{ path: "./server/.env" }
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const collectionName = "Public";
// this PUT function will add user's color palette to their designated archive.
export const getCommunity = async (req, res) => {
  //create a new client
  const client = new MongoClient(MONGO_URI, options);
  // connect to the client
  await client.connect();

  try {
    //info required

    // connect to the database
    const db = client.db("color-persona");
    console.log("CONNECTED");
    //
    // check if there's a Public collection

    const publicArchive = await db.collection(collectionName).find().toArray();
    await client.close();

    return res.status(200).json({
      status: 200,
      success: true,
      data: publicArchive,
    });
  } catch (err) {
    await client.close();

    return res.status(400).json({
      status: 400,
      message: err.message,
      success: false,
    });
  }
};
