"use strict";

//require Mongodb
const { MongoClient } = require("mongodb");

//get URI
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
console.log("🚀 ~ MONGO_URI", MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all items from the database
// pagenated requires offset and quantity in the request body
const test = async () => {
  console.log("🚀 ~ MONGO_URI", MONGO_URI);
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database
  const db = client.db("color-persona");
  console.log("CONNECTED");
  //   await db.createCollection("another-user");
  //   const result = await db.listCollections().toArray();
  const result = await db.collection("user").find().toArray();
  console.log(result);
  await client.close();
  console.log("close");
};
const getAllItems = async (req, res) => {
  try {
    // get the offset and quantity for pagination from the request body
    // conditional to account for no body - start from beginning and give 6 items
    const offset = req.params.offset ? req.params.offset : 0;
    const quantity = 6;

    // create a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("Ecommerce");
    console.log("CONNECTED");

    // retreive all items
    const allItems = await db
      .collection("items")
      .find()
      .skip(parseInt(offset))
      .limit(quantity)
      .toArray();

    //close the collection
    client.close();
    console.log("DISCONNECTED");

    // return the json object and status
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        data: allItems,
      })
    );
  } catch (err) {
    // ERROR return
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

// export handler function
module.exports = { getAllItems };
