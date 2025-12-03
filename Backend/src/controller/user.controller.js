import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { fileUpload } from "../utils/fileUpload.js";

// Create User Account
export async function createUserProfile(req, res) {
  try {
    // Getting all the details which is required to create an account (ex: fullname, emial, password etc)
    const {
      fullname = "",
      email = "",
      password = "",
      phone = "",
      gender = "",
      dateOfBirth = "",
      city = "",
    } = req.body;

    // save and gerate image url from cloudinary
    const imageDetails = await fileUpload(req, res);

    // if responce is empty then throwing error
    if (!imageDetails)
      return ApiError({ res, statusCode: 400, error: "Something went wrong" });

    // setting image details so send it to create method
    const imageUrl = imageDetails.secure_url;
    const imagePublicUrl = imageDetails.public_id;

    // create user by using Create method and User model
    const userCreated = await User.create({
      fullname,
      email,
      password,
      phone,
      gender,
      dateOfBirth,
      location: { city },
      imageUrl,
      imagePublicUrl,
    });

    // cheking that user is created or not if not then throw an error
    if (!userCreated)
      return ApiError({ res, statusCode: 400, error: "User not created" });

    // return message that user is created
    ApiResponse({
      res,
      statusCode: 200,
      activityType: "Creation",
      data: userCreated,
    });
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Update User Infotmation
export async function updateUserProfile(req, res) {
  try {
    // Getting all the details which we are going to change with email
    // Checking that email is exist or not
    // If Email is not exist then throw an error
    // if user exist then update the details
    // Send update response
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Delete User Account
export async function deleteUserProfile(req, res) {
  try {
    // Checking that email is exist or not
    // If Email is not exist then throw an error response
    // If Email exist then change user profile isActive property to false
    // Send delete response
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Update Password
export async function updatePassword(req, res) {
  try {
    // getting all the required fields which need to do this operation
    // checking that the given fields are not empty
    // encrypt the password provided by the user
    // update the user password with there corresponding email
    // check if password updated or not if not then send null if yes then send something else
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Upload Image
export async function uploadImage(req, res) {
  try {
    const response = await fileUpload(req, res);

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
