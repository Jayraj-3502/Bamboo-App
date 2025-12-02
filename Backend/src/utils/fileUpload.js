import { unlinkSync } from "fs";
import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";
import { uploadOnCloudinary } from "./cloudinaryr.js";

export async function fileUpload(req, res) {
  try {
    console.log(req.file);

    if (!req.file) {
      return ApiError({ res, statusCode: 404, error: "File Not Found" });
    }

    const response = await uploadOnCloudinary(req.file.path);
    console.log("this is file upload", response);

    if (!response) return null;

    unlinkSync(req.file.path);

    return response;
  } catch (error) {
    console.log("There is an Error: ", error);
  }
}
