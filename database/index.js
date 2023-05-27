const mongoose = require("mongoose");

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoUrl = `mongodb+srv://${username}:${password}@clientels.z5imkxw.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    if (!username || !password) throw new Error("MongoDB Connect -> Undefined username or password");
    await mongoose.connect(mongoUrl);
    console.log("Successfully connected to MongoDB");

    mongoose.connection.on('error', error => {
      console.log(error);
    });

  } catch (error) { console.log(error) }
};

connect();