import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import { mongoDbConnection } from "./src/database/db.js";
import uploadRoute from "./src/routes/upload.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

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
app.use("/auth", authRoute);

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
