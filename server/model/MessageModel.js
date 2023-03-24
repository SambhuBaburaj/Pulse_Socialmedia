const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const { UsersData } = require("./UserData");
const { ChatModel } = require("./ChatModel");
const MessagesModelSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: UsersData },
    content: {
      type: String,
      trim: true,
    },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: ChatModel },
  },
  { timestamp: true }
);
const MessageModel = mongoose.model("Message", MessagesModelSchema);
module.exports = { MessageModel };
