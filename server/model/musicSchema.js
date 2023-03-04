const mongoose = require("mongoose");
const musicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    artist: {
      type: String,
      unique: true,
      required: true,
    },
    album: {
      type: Boolean,
      unique: true,
      required: true,
      default: false,
    },
    genre: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Music", musicSchema);
