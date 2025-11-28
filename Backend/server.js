import express from "express";
import { mongoDbConnection } from "./src/database/db.js";
import ApiResponse from "./src/utils/ApiResponse.js";
import uploadRoute from "./src/routes/upload.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

// app.use("/", (req, res) => {
//   ApiResponse({
//     res,
//     statusCode: 200,
//     activityType: "fetch",
//     data: "Request is fetched",
//   });
// });

app.use("/api", uploadRoute);

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
