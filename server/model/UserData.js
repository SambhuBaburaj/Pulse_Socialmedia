const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const User = new mongoose.Schema({
  username: String,
  UserId: String,
  email: String,
  password: String,
  createdOn: Date,
  profileImage: {type:String,require:true,default:'default-avatar-profile-icon-of-social-media-user-vector.jg'},
  followers: Array,
  following: Array,
  blocked: Boolean,
  post: Array,
});

const UsersData = mongoose.model("UserData", User);

const UserPost = new mongoose.Schema(
  {
    User: { type: mongoose.Schema.Types.ObjectId, ref: UsersData },
    Post: String,

    likes: Array,
    comments: Array,
  },
  { timestamps: true }
);
const UserPostSchema = mongoose.model("UserPost", UserPost);

module.exports = { UsersData, UserPostSchema };
