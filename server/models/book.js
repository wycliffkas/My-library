const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
