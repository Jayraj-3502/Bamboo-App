import mongoose, { Schema } from "mongoose";

const followSchema = new Schema({
  // User id
  userId: { type: Schema.Types.ObjectId, ref: "User" },

  // Followers Ids who is following user
  followerIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export const Follow = mongoose.model("Follow", followSchema);
