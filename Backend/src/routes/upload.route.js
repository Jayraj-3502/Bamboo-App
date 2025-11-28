// upload.route.js
import express from "express";
import multer from "multer";
import { uploadImage } from "../controller/user.controller.js";

const upload = multer({ dest: "uploads/" });
const uploadRoute = express.Router();

// Single image upload
uploadRoute.post("/upload", upload.single("image"), uploadImage);

export default uploadRoute;
