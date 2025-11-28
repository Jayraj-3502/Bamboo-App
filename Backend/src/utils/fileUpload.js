import { unlinkSync } from "fs";
import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";

export async function fileUpload(req, res) {
  try {
    if (!req.file) {
      return ApiError({ res, statusCode: 404, error: "File Not Found" });
    }

    const response = await uploadOnCloudinary(req.file.path);

    if (!response)
      return ApiError({
        res,
        statusCode: 400,
        error: "something went wrong during file upload!",
      });

    unlinkSync(req.file.path);

    return response;
  } catch (error) {
    console.log("There is an Error: ", error);
  }
}
