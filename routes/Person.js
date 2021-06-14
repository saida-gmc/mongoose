const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Person = require("../models/person");
router.get("/", (req, res) => {
  res.send("hello routing");
});
router.post("/api/person", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await 
    res.send({msg:"person added"})
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
