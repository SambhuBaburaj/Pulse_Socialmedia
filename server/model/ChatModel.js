const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const { MessageModel } = require("./MessageModel");
const UsersData = require("./UserData").UsersData;

const ChatModelSchema = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    Users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersData,
      },
    ],
    latestMessages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MessageModelodel,
    }, //will create a message date base
    GroupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UsersData,
    },
  },
  {
    timestamps: true,
  }
);
const ChatModel = mongoose.model("Chat", ChatModelSchema);

module.exports = { ChatModel };
