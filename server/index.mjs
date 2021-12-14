"use strict";

import express from "express";
// import express from"body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
// handlers
import { getArchive, createNewArchive } from "./handlers/CreateArchive.mjs";
import { savePalette } from "./handlers/SavePalette.mjs";
import { getCommunity } from "./handlers/CommunityFeed.mjs";
// import { getImagesPalette } from "./unsplash/data.mjs";
import { sharePalette } from "./handlers/SharePalette.mjs";

//port
const PORT = 8080;

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
  .use(helmet())
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  // .use("/", express.static(__dirname + "/"))

  //REST ENDPOINTS

  // get all items - paginated requires offset
  .get("/complementary/:color", (req, res) => {
    getComplementaryColor(req, res);
    console.log("trigger");
  })

  .get("/api/archives/:user", getArchive)
  .post("/api/archive/create", createNewArchive)
  .put("/api/palette/save", savePalette)
  .post("/api/palette/share", sharePalette)
  .get("/api/community", getCommunity)
  // .get("/api/inspiration", getImagesPalette)

  // catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This page does not exist.",
    });
  })
  //killing the process
  //netstat -ano | findstr :8080
  //taskkill /F /PID 12017(or whatever the process ID is)
  // our port
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
