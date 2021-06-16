const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    require: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  userCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("user", UserSchema);
