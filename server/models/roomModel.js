import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true },
    roomType: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    speakers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model("Room", roomSchema);
