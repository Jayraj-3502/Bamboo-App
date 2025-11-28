import mongoose from "mongoose";

export async function mongoDbConnection() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/bamboo")
    .then(console.log("Database is connected: ", mongoose.connection.name))
    .catch((error) => {
      aaaaaaaaaa;
      console.log("Getting Error in MongoDB Connection: ", error);
    });
}
