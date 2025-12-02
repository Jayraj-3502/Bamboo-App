import mongoose, { Schema } from "mongoose";

const blockSchema = new Schema({
  // user id
  blockerId: { type: Schema.Types.ObjectId, ref: "User" },

  // peoples ids who blocked by user
  blockedIds: [{ type: Schema.Types.ObjectId, ref: "User" }],

  // peoples ids who blocked user
  blockedByIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export const Block = mongoose.model("Block", blockSchema);
