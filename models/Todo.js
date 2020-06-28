const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: [true, "Please add TODO"],
  },
  complete: {
	  type: Boolean,
	  default: false
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
