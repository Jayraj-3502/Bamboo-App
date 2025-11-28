import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    // Person who is reporting
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Person agains whom report is raised
    reportedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reason of the raising report
    reason: { type: String, required: true },
  },
  { timestamps: true }
);

export const Report = mongoose.model("Report", reportSchema);
