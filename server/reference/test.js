"use strict";
const { v4: uuidv4 } = require("uuid");
// uuidv4();
//require Mongodb
const mongo = require("./mongo");
// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const User = require("../schemas/User");
//get URI

// this PUT function will add user's color palette to their designated archive.
const test = async () => {
  const mongoose = await mongo();
  const user = {
    _id: "My Archive",
    palettes: [
      { _id: uuidv4(), name: "My Color Theme", colors: [] },
      { _id: uuidv4(), name: "My Color Theme", colors: [] },
      { _id: uuidv4(), name: "My Color Theme", colors: [] },
    ],
  };
  await new User(user).save();
  await mongoose.connection.close();
  console.log("closed");
};

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
test();

// export handler function
// module.exports = { getArchive, createNewArchive };
