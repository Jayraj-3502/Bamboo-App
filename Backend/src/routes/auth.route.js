import { Router } from "express";
import multer from "multer";
import {
  forgotPasswordEmailVerification,
  forgotPasswordOtpVerification,
  loginUser,
  registerUser,
  registerUserOtpVerification,
} from "../controller/auth.controller.js";

const upload = multer({ dest: "uploads/" });
const authRoute = Router();

authRoute.post("/register", registerUser);
authRoute.post(
  "/register-verification",
  upload.single("image"),
  registerUserOtpVerification
);
authRoute.post("/login", loginUser);
authRoute.post(
  "/forgot-password-email-verification",
  forgotPasswordEmailVerification
);
authRoute.post(
  "/forgot-password-otp-verification",
  forgotPasswordOtpVerification
);

export default authRoute;
