import mongoose, { Schema } from "mongoose";

const requestSchema = new Schema({
  // Person who is sending the request
  senderId: { type: Schema.Types.ObjectId, ref: "User" },

  //   Person who is going to recieve the request
  recieverId: { type: Schema.Types.ObjectId, ref: "User" },

  // Status of the request
  status: {
    type: String,
    enum: ["pending", "accept", "reject"],
    default: "pending",
  },
});

export const Request = mongoose.model("Request", requestSchema);
