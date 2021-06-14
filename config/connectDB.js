const mongoose = require("mongoose");

require("dotenv").config();
console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://saida:saida123456@cluster0.lp9rm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
