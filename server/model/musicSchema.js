const mongoose = require("mongoose");
const musicSchema = mongoose.Schema(
  {
    artist: {
      type: String,
      unique: true,
      required: true,
    },
    genre: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Music", musicSchema);
