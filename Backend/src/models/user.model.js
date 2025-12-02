import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    // Basic Information
    fullname: { type: String, required: true, min: 3, max: 20, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, min: 6 },
    phone: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imagePublicUrl: { type: String },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    dateOfBirth: { type: Date, required: true },

    // Preference for Matching
    preferedGender: { type: String, enum: ["male", "female", "other"] },
    ageRange: {
      min: { type: Number },
      max: { type: Number },
    },
    distanceRange: { type: Number, default: 0 },
    location: {
      city: { type: String, required: true },
    },

    // Profile Details
    bio: { type: String },
    intrestesAndHoddies: [{ type: String }],
    occupation: {
      type: {
        title: { type: String, trim: true, maxlength: 100 },
        company: { type: String, trim: true, maxlength: 100 },
      },
    },
    education: [
      {
        institution: {
          type: String,
          trim: true,
          required: true,
          maxlength: 150,
        },
        degree: { type: String, trim: true, maxlength: 100 },
        fieldOfStudy: { type: String, trim: true, maxlength: 100 },
        completed: { type: Boolean, default: false },
      },
    ],
    relationshipGoal: {
      type: String,
      enum: [
        "casual",
        "dating",
        "long-term",
        "friendship",
        "networking",
        "open to anything",
      ],
      default: "casual",
    },
    height: { type: String },
    lifestyle: [{ type: String }],
    isVerified: { type: Boolean, default: true },

    // Follower and Following
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },

    // Status and other details
    isActive: { type: Boolean, default: true },
    blocked: [{ type: Schema.Types.ObjectId, ref: "User" }],
    lastActive: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
