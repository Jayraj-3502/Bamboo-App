import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { fileUpload } from "../utils/fileUpload.js";

// Update Infotmation
export async function updateUserInformation(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Delete Account
export async function DeleteUserAccount(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Reset Password
export async function resetPassword(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

//Upload Image
export async function uploadImage(req, res) {
  try {
    const response = await fileUpload();

    if (!response)
      return ApiError({ res, statusCode: 400, error: "Something wrong" });

    ApiResponse({
      res,
      statusCode: 200,
      activityType: "upload",
      data: response,
    });
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}
