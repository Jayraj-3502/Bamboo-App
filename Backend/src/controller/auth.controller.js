import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { createUserProfile } from "./user.controller.js";

// Register User
export async function registerUser(req, res) {
  try {
    // Destructuing Email form Body
    const { email } = req.body;
    console.log(email);

    // Checking that user already exist or not (isActive:false means previously user have account)
    const userExist = await User.find({ email });
    // console.log(userExist);

    // Error checking if user exist then throw error
    if (userExist?.isActive === true)
      return ApiError({
        res,
        statusCode: 404,
        error: "User with this email alreay exist",
      });

    // If user not exist or inActive:false then send an OTP on there Email

    // repsponce of sending OTP
    ApiResponse({
      res,
      statusCode: 200,
      activityType: "Email Verification",
      data: "User email verified",
    });
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Registeration OTP Verification
export async function registerUserOtpVerification(req, res) {
  try {
    console.log("this is runnng", req.body);
    // Taking and Destructuring the required details for the User profile from request body
    const {
      fullname = "",
      email = "",
      password = "",
      phone = "",
      gender = "",
      dateOfBirth = "",
      city = "",
    } = req.body;

    // checking all the required details are provided or not if not then throw error
    if (
      !fullname ||
      !email ||
      !password ||
      !phone ||
      !gender ||
      !dateOfBirth ||
      !city
    )
      return ApiError({
        res,
        statusCode: 400,
        error: "Some Details are missing",
      });

    // Checking that user with the following email is Exist or isActive:false
    const userExist = await User.find({ email });

    // If user exist and isActive:false then run the update method if not exist then creating the new User profile
    if (userExist.length === 0) {
      console.log("Creating new user");
      await createUserProfile(req, res);
    } else {
      console.log("Updating the user data");
      ApiResponse({
        res,
        statusCode: 200,
        activityType: "Update",
        data: "data",
      });
    }
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Login User (sending user details)
export async function loginUser(req, res) {
  try {
    // getting all the details which is required for the login
    // check that the email is exist or not also isActive property
    // if email is exist then compare the requset password with the encrypted one
    // if request and encrypted password not matched then throw an error
    // if passwords are matched then generate token
    // send response of success with token details
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Forgot Password Email Verification and OTP send
export async function forgotPasswordEmailVerification(req, res) {
  try {
    // getting the required details
    // checking that email is exist or not also isActive property
    // if email not exist the throw and error
    // if email exist then send OTP on the provided email
    // if error occure in sending OTP then throw error message
    // if OTP sended then send response of "OTP sended"
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Forgot Password OTP Verification
export async function forgotPasswordOtpVerification(req, res) {
  try {
    // getting the required details
    // checking that email is exist or not also isActive property
    // if email not exist the throw and error
    // if email exits then matching the OTP's. If not matched then throw error
    // if OTP's matched then send response that OTP matched
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}
