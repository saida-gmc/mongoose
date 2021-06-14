const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const PersonSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
module.exports = Person = model("person", PersonSchema);
