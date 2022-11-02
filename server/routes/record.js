const { application } = require("express");
const express = require("express");
var bodyParser = require("body-parser");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/").get(function (req, res) {
  res.send("Hello from backend base");
});

recordRoutes.route("/beaches").get(function (req, res) {
  let db_connect = dbo.getDb("beaches");
  db_connect
    .collection("beaches")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/beaches/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("beaches").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/beaches/add").post(function (req, response) {
  console.log(req.body);
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
    confidenceScore: req.body.confidenceScore,
    mapURL: req.body.mapURL,
  };
  db_connect.collection("beaches").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("beaches")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("beaches").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 beach deleted from db");
    response.json(obj);
  });
});

module.exports = recordRoutes;
