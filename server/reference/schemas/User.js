const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const paletteSchema = mongoose.Schema({
  _id: reqString,
  name: reqString,
  colors: [String],
});

const UserSchema = new mongoose.Schema({
  // {
  //   _id:"My Archive",
  //   palettes:[
  //     {_id:"UUID", name: "My Color Theme", colors:[]},
  //     {_id:"UUID", name: "My Color Theme", colors:[]},
  //     {_id:"UUID", name: "My Color Theme", colors:[]},
  //   ]
  // }

  _id: reqString,
  palettes: [paletteSchema],
  // googleId: {
  //   type: String,
  //   required: true,
  // },
  // displayName: {
  //   type: String,
  //   required: true,
  // },
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("User", UserSchema); //"User" collection
