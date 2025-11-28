import ApiError from "../utils/export.js";

// Register User
export async function registerUser(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Registeration OTP Verification
export async function registerUserOtpVerification(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Login User (sending user details)
export async function loginUser(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Forgot Password with Email
export async function forgotPasswordEmailVerification(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Forgot Password OTP Verification
export async function forgotPasswordOtpVerification(req, res) {
  try {
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}
