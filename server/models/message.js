import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      trim: true,
    },
    timeline: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
