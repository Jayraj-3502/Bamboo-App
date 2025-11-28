import express from "express";
import { mongoDbConnection } from "./src/database/db.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.send("This is Home.");
});

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
