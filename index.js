const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const Person = require("./models/person");

require("dotenv").config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
connectDB();

// app.use("/",con)
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is connected on 5000`);
});
//personn route
const personRoute = require("./routes/Person");
app.use("/api/person", personRoute);

//Create and Save a Record of a Model:
const newperson = new Person({
  name: "melek",
  age: 4,
  favoriteFoods: ["frites", "pizza"],
}).save(function (err, data) {
  try {
    console.log("saved successfuly");
  } catch (error) {
    console.log(error);
  }
});
//Create Many Records with model.create()s
const arrayOfPeople = [
  { name: "saida1", age: 33, favoriteFoods: ["pasta", "sandwich"] },
  { name: "saida2", age: 32, favoriteFoods: ["rice", "meal"] },
  { name: "saida3", age: 31, favoriteFoods: ["lasagnes", "canellonis"] },
];

const people = Person.create(arrayOfPeople, function (err, data) {
  try {
    console.log("people created");
  } catch (error) {
    console.log(error);
  }
});
// console.log(people);
//Use model.find() to Search Your Database
const FindPerson = Person.find({ name: "saida1" });

//Use model.findOne()
const FindOne = Person.findOne({ favouriteFoods: "pasta" });

//Use model.findById() to Search Your Database By _id
const FindbyId = Person.findById({ _id: "5000" });

//Perform Classic Updates by Running Find, Edit, then Save
// const findAndAdding=Person.updateOne({_id:"22222"},{ $set: {favouriteFoods:favouriteFoods.push("Hamburger")}},{new:true})

//Perform New Updates on a Document Using model.findOneAndUpdate()
const updated = Person.updateOne(
  { name: "melek" },
  { $set: { age: 20 } },
  { new: true }
);