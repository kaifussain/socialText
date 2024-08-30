const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  posted_at: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      owner: { type: Schema.Types.ObjectId, ref: "users" },
      content: { type: String, required: true },
      posted_at: { type: Date, default: Date.now },
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
});

// Model
const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
