"use strict";

const express = require("express");
// const express = require("body-parser");
const morgan = require("morgan");

// handlers
const { getComplementaryColor } = require("./handlers/utils");
// const { getItemById } = require("./handlers/getItemById.js");
// const { updateItemStock } = require("./handlers/updateItemStock.js");
// const { getCompanyById } = require("./handlers/getCompanyById.js");
// const { getItemsByCompany } = require("./handlers/getItemsByCompany.js");
// const { getItemsByBodypart } = require("./handlers/getItemByBodypart.js");
// const { getItemsByOrder } = require("./handlers/getItemsByOrder.js");
// const { getAllCompanies } = require("./handlers/getAllCompanies");

//port
const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //REST ENDPOINTS

  // get all items - paginated requires offset
  .get("/complementary/:color", (req, res) => {
    getComplementaryColor(req, res);
    console.log("trigger");
  })
  // get single item by id
  //   .get("/foabt/items/:_id", getItemById)
  //   // update item stock takes body {_id, numPurchased}
  //   .put("/foabt/items/", updateItemStock)
  //   // get all companies
  //   .get("/foabt/company/allCompanies", getAllCompanies)
  //   // get company by id
  //   .get("/foabt/company/:_id", getCompanyById)
  //   // get items by company
  //   .get("/foabt/items/company/:companyId", getItemsByCompany)
  //   // get items by body part
  //   .get("/foabt/items/bodypart/:part", getItemsByBodypart)
  //   //get items by order
  //   .post("/foabt/items", getItemsByOrder)

  // catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This page does not exist.",
    });
  })

  // our port
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
